 #Starter code prepared by Borna Ghotbi for computer vision
 #based on MATLAB code by James Hays
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import LinearSVC

'''This function will predict the category for every test image by finding
the training image with most similar features. Instead of 1 nearest
neighbor, you can vote based on k nearest neighbors which will increase
performance (although you need to pick a reasonable value for k). '''

def nearest_neighbor_classify(train_image_feats, train_labels, test_image_feats, k):
    '''
    Parameters
        ----------
        train_image_feats:  is an N x d matrix, where d is the dimensionality of the feature representation.
        train_labels: is an N x l cell array, where each entry is a string 
        			  indicating the ground truth one-hot vector for each training image.
    	test_image_feats: is an M x d matrix, where d is the dimensionality of the
    					  feature representation. You can assume M = N unless you've modified the starter code.
        
    Returns
        -------
    	is an M x l cell array, where each row is a one-hot vector 
        indicating the predicted category for each test image.

    Usefull funtion:
    	# You can use knn from sci-kit learn.
        # Reference: https://scikit-learn.org/stable/modules/generated/sklearn.neighbors.KNeighborsClassifier.html
    '''
    knn = KNeighborsClassifier(n_neighbors=k)
    # fit(X, y) fit's the SVM model according to the given training data. X = training vectors, y = target values 
    knn.fit(train_image_feats, train_labels)
    # use predict(x) to calculate the cluster center 
    predicted_labels = knn.predict(test_image_feats)
    # make sure that shape is M x l
    # assert train_labels.shape == (test_image_feats.shape[0], train_labels.shape[1])
    return predicted_labels 


'''This function will train a linear SVM for every category (i.e. one vs all)
and then use the learned linear classifiers to predict the category of
every test image. Every test feature will be evaluated with all 15 SVMs
and the most confident SVM will "win". Confidence, or distance from the
margin, is W*X + B where '*' is the inner product or dot product and W and
B are the learned hyperplane parameters. '''

def svm_classify(C, train_image_feats, train_labels, test_image_feats):

    '''
    Parameters
        ----------
        train_image_feats:  is an N x d matrix, where d is the dimensionality of the feature representation.
        train_labels: is an N x l cell array, where each entry is a string 
        			  indicating the ground truth one-hot vector for each training image.
    	test_image_feats: is an M x d matrix, where d is the dimensionality of the
    					  feature representation. You can assume M = N unless you've modified the starter code.
        
    Returns
        -------
    	is an M x l cell array, where each row is a one-hot vector 
        indicating the predicted category for each test image.

    Usefull funtion:
    	
    	# You can use svm from sci-kit learn.
        # Reference: https://scikit-learn.org/stable/modules/svm.html

    '''

    # Confidence, or distance from the margin, is W*X + B where '*' is the inner product or dot product 
    # and W and B are the learned hyperplane parameters.
    svm = LinearSVC(random_state=0, tol=1e-5, C=50.0, multi_class='ovr', max_iter=1000)
    svm.fit(train_image_feats, train_labels)
    predicted_labels = svm.predict(test_image_feats)

    return predicted_labels 

