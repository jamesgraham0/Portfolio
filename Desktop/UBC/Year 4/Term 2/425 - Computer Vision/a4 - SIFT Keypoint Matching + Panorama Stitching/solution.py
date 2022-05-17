import numpy as np
import cv2
import math
import random


def RANSACFilter(matched_pairs, keypoints1, keypoints2, orient_agreement, scale_agreement):
    """
    This function takes in `matched_pairs`, a list of matches in indices
    and returns a subset of the pairs using RANSAC.
    Inputs:
        matched_pairs: a list of tuples [(i, j)],
            indicating keypoints1[i] is matched
            with keypoints2[j]
        keypoints1, 2: keypoints from image 1 and image 2
            stored in np.array with shape (num_pts, 4)
            each row: row, col, scale, orientation
        *_agreement: thresholds for defining inliers, floats
    Output:
        largest_set: the largest consensus set in [(i, j)] format

    HINTS: the "*_agreement" definitions are well-explained
           in the assignment instructions.
    """
    assert isinstance(matched_pairs, list)
    assert isinstance(keypoints1, np.ndarray)
    assert isinstance(keypoints2, np.ndarray)
    assert isinstance(orient_agreement, float)
    assert isinstance(scale_agreement, float)
    ## START
    largest_set = []
    # take 10 samples ()
    num_matches = len(matched_pairs)
    i = 0
    while i < 10:
        curr_set = []
        random_int = random.randint(0, num_matches-1)
        curr_match = matched_pairs[random_int]
        curr_set.append(curr_match)
        
        angle1_curr_match = keypoints1[curr_match[0], 3]
        angle2_curr_match = keypoints2[curr_match[1], 3]
        # ORIENTATION IS MEASURED IN RADIANS, so we convert to degrees
        angle_difference_curr_match = np.degrees(angle2_curr_match - angle1_curr_match)
        # get difference in scale
        scale_difference_curr_match = keypoints2[curr_match[1], 2] / keypoints1[curr_match[0], 2]

        # compare randomly selected matched pair with all of the others
        for j in range(len(matched_pairs)):
            # ignore the case where we find the randomly selected matched pair
            if (j != curr_match):
                # check that keypoints have difference in angle < orient_agreement
                angle1_compare_match = keypoints1[matched_pairs[j][0], 3]
                angle2_compare_match = keypoints2[matched_pairs[j][1], 3]

                angle_difference_compare_match = np.degrees(angle2_compare_match - angle1_compare_match)
                scale_difference_compare_match = keypoints2[matched_pairs[j][1], 2] / keypoints1[matched_pairs[j][0], 2]

                # do all checks (orientation and scale)
                # for scale we check that the other scale difference is within 1.(scale_agreement) times (e.g if scale_agreement = 0.5, we'd check if the other is <= 1.5*curr and >= 0.5curr)
                if abs(angle_difference_compare_match - angle_difference_curr_match) <= orient_agreement and scale_difference_compare_match <= scale_difference_curr_match * (1.0 + scale_agreement) and scale_difference_compare_match >= scale_difference_curr_match * (1.0 - scale_agreement): 
                    curr_set.append(matched_pairs[j])


        if len(curr_set) > len(largest_set):
            largest_set = curr_set 
        i += 1

    print("largest_set: " + "size: " + str(len(largest_set)) + str(largest_set))

    ## END
    assert isinstance(largest_set, list)
    return largest_set



def FindBestMatches(descriptors1, descriptors2, threshold):
    """
    This function takes in descriptors of image 1 and image 2,
    and finds matches between them. See assignment instructions for details.
    Inputs:
        descriptors: a K-by-128 array, where each row gives a descriptor
        for one of the K keypoints.  The descriptor is a 1D array of 128
        values with unit length.
        threshold: the threshold for the ratio test of "the distance to the nearest"
                   divided by "the distance to the second nearest neighbour".
                   pseudocode-wise: dist[best_idx]/dist[second_idx] <= threshold
    Outputs:
        matched_pairs: a list in the form [(i, j)] where i and j means
                       descriptors1[i] is matched with descriptors2[j].
    """
    assert isinstance(descriptors1, np.ndarray)
    assert isinstance(descriptors2, np.ndarray)
    assert isinstance(threshold, float)
    ## START
    # first we measure the angles between each vector in d1 and d2
    # need to transpose d2 matrix so that we can multiply them (K1 x 128) * (128 x K2)
    # matrix multiplication is the "dot product" of matrices, and is more time efficient
    # than multiplying out every vector within the nparray
    x = np.matmul(descriptors1, np.transpose(descriptors2))
    # instead of using math.acos(x), use np.arccos() on the whole matrix
    angles = np.arccos(x)
    # np.argmin returns the indices of the min values along an axis. axis=1 is the column (left/right), axis=0 is the row (up/down)
    # using axis=1 means we're getting the min/sort values along the K direction (e.g. in this case K = 694)
    min_indices = np.argmin(angles, axis=1)
    # sort the minimum indices
    sorted_angles = np.sort(angles)

    best_arr = sorted_angles[:,0]
    second_best_arr = sorted_angles[:,1]
    # make an array of true and false values where true represents values that are above the threshold
    within_threshold = best_arr/second_best_arr > threshold
    # set all of the values that are above (surpass) the threshold to 0, where non-zero values are the desired values
    min_indices[within_threshold] = 0

    # make a list of pairs between the indices and the non-zero values from min_indices
    pair_indices_w_vals = []
    for index in range(min_indices.shape[0]):
        pair_indices_w_vals.append((index, min_indices[index]))

    matched_pairs = []
    # add only the pairs that have non-zero (threshold exceeding) second values
    for pair in pair_indices_w_vals:
        if pair[1]:
            matched_pairs.append(pair)
    ## END
    print("matched pairs size " + str(len(matched_pairs)))
    return matched_pairs


def KeypointProjection(xy_points, h):
    """
    This function projects a list of points in the source image to the
    reference image using a homography matrix `h`.
    Inputs:
        xy_points: numpy array, (num_points, 2)
        h: numpy array, (3, 3), the homography matrix
    Output:
        xy_points_out: numpy array, (num_points, 2), input points in
        the reference frame.
    """
    assert isinstance(xy_points, np.ndarray)
    assert isinstance(h, np.ndarray)
    assert xy_points.shape[1] == 2
    assert h.shape == (3, 3)

    # START
    # convert 2d points to homogeneous coordinates, giving dimensions (num_points, 3)
    array = np.ones((xy_points.shape[0], 1), dtype=np.float64)
    homogeneous_points_source = np.append(xy_points, array, axis=1)

    # perform the projection by a matrix multiplication
    homogeneous_points_projection = np.transpose(np.matmul(h, np.transpose(homogeneous_points_source)))

    # we do this by getting the z components of the projected points, then repeating them 
    # if the extra dimension is 0.0, replace it with 1e-10
    z_dimension = homogeneous_points_projection[:,-1]
    for i in range(len(z_dimension)):
        if z_dimension[i] == 0.0:
            z_dimension[i] = 1e-10
    expanded_array = np.expand_dims(z_dimension, axis=1)
    z_dimension = np.repeat(expanded_array, repeats=2, axis=1)

    # convert it back to regular coordinates by dividing through the extra dimension
    xy_points_out = homogeneous_points_projection[:,:-1]/z_dimension
    # END
    return xy_points_out

def RANSACHomography(xy_src, xy_ref, num_iter, tol):
    """
    Given matches of keypoint xy coordinates, perform RANSAC to obtain
    the homography matrix. At each iteration, this function randomly
    chooses 4 matches from xy_src and xy_ref.  Compute the homography matrix
    using the 4 matches.  Project all source "xy_src" keypoints to the
    reference image. Check how many projected keypoints are within a `tol`
    radius to the corresponding xy_ref points (a.k.a. inliers).  During the
    iterations, you should keep track of the iteration that yields the largest
    inlier set. After the iterations, you should use the biggest inlier set to
    compute the final homography matrix.
    Inputs:
        xy_src: a numpy array of xy coordinates, (num_matches, 2)
        xy_ref: a numpy array of xy coordinates, (num_matches, 2)
        num_iter: number of RANSAC iterations.
        tol: float
    Outputs:
        h: The final homography matrix.
    """
    assert isinstance(xy_src, np.ndarray)
    assert isinstance(xy_ref, np.ndarray)
    assert xy_src.shape == xy_ref.shape
    assert xy_src.shape[1] == 2
    assert isinstance(num_iter, int)
    assert isinstance(tol, (int, float))
    tol = tol*1.0

    # START
    largest_consensus_set = []
    h = np.zeros(shape=(3,3))
    # run RANSAC num_iter times
    for times in range(num_iter): 
        curr_consensus_set = []
        # randomly pick 4 matches of points to compute a homography matrix
        random1, random2, random3, random4 = random.sample(range(len(xy_src)), 4)
        src_matches = np.array([xy_src[random1], xy_src[random2], xy_src[random3], xy_src[random4]])
        ref_matches = np.array([xy_ref[random1], xy_ref[random2], xy_ref[random3], xy_ref[random4]])

        # project all keypoints from src img to ref img using the computed homography matrix
        homography_matrix = cv2.findHomography(src_matches, ref_matches)[0]
        proj = KeypointProjection(xy_src, homography_matrix)

        # compute Euclidean distance between each projected point to its correspondance in reference frame
        # You should compute the Euclidian distance using the whole "xy_ref" and the proj 
        # (output of KeypointProjection) arrays (they should have the same shape).
        for i in range(len(proj)):
            x = proj[i][0] - xy_ref[i][0]
            y =  proj[i][1] - xy_ref[i][1]
            distance = math.sqrt((x)**2 + (y)**2)
            # if the distance <= tol, the match is considered an inlier and we add the match to the consensus set
            if (distance <= tol):
                curr_consensus_set.append(i)
        # if the consensus set is larger than the currently largest set, we set it as the largest set
        if (len(curr_consensus_set) > len(largest_consensus_set)):
            largest_consensus_set = curr_consensus_set.copy()

    # compute and return the final homography matrix using the largest consensus set
    h = cv2.findHomography(xy_src[largest_consensus_set], xy_ref[largest_consensus_set])[0]

    # END
    assert isinstance(h, np.ndarray)
    assert h.shape == (3, 3)
    return h


def FindBestMatchesRANSAC(
        keypoints1, keypoints2,
        descriptors1, descriptors2, threshold,
        orient_agreement, scale_agreement):
    """
    Note: you do not need to change this function.
    However, we recommend you to study this function carefully
    to understand how each component interacts with each other.

    This function find the best matches between two images using RANSAC.
    Inputs:
        keypoints1, 2: keypoints from image 1 and image 2
            stored in np.array with shape (num_pts, 4)
            each row: row, col, scale, orientation
        descriptors1, 2: a K-by-128 array, where each row gives a descriptor
        for one of the K keypoints.  The descriptor is a 1D array of 128
        values with unit length.
        threshold: the threshold for the ratio test of "the distance to the nearest"
                   divided by "the distance to the second nearest neighbour".
                   pseudocode-wise: dist[best_idx]/dist[second_idx] <= threshold
        orient_agreement: in degrees, say 30 degrees.
        scale_agreement: in floating points, say 0.5
    Outputs:
        matched_pairs_ransac: a list in the form [(i, j)] where i and j means
        descriptors1[i] is matched with descriptors2[j].
    Detailed instructions are on the assignment website
    """
    orient_agreement = float(orient_agreement)
    assert isinstance(keypoints1, np.ndarray)
    assert isinstance(keypoints2, np.ndarray)
    assert isinstance(descriptors1, np.ndarray)
    assert isinstance(descriptors2, np.ndarray)
    assert isinstance(threshold, float)
    assert isinstance(orient_agreement, float)
    assert isinstance(scale_agreement, float)
    matched_pairs = FindBestMatches(
        descriptors1, descriptors2, threshold)
    matched_pairs_ransac = RANSACFilter(
        matched_pairs, keypoints1, keypoints2,
        orient_agreement, scale_agreement)
    return matched_pairs_ransac
