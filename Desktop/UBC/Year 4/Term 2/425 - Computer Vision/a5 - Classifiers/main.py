#Starter code prepared by Borna Ghotbi, Polina Zablotskaia, and Ariel Shann for Computer Vision
#based on a MATLAB code by James Hays and Sam Birch 

import numpy as np
from util import load, build_vocabulary, get_bags_of_sifts
from classifiers import nearest_neighbor_classify, svm_classify
import os.path
import sys
import pickle
import matplotlib.pyplot as plt
from sklearn.metrics import confusion_matrix, accuracy_score, ConfusionMatrixDisplay, plot_confusion_matrix
import seaborn as sns

vocab_size = 10
k = 100
C = 10.0

#For this assignment, you will need to report performance for sift features on two different classifiers:
# 1) Bag of sift features and nearest neighbor classifier
# 2) Bag of sift features and linear SVM classifier

#For simplicity you can define a "num_train_per_cat" variable, limiting the number of
#examples per category. num_train_per_cat = 100 for instance.

#Sample images from the training/testing dataset. 
#You can limit number of samples by using the n_sample parameter.
       

#If you want to avoid recomputing the features while debugging the
#classifiers, you can either 'save' and 'load' the extracted features
#to/from a file.
if not os.path.exists("train_image_paths.npy") or not os.path.exists("train_labels.npy") or not os.path.exists("test_image_paths.npy") or not os.path.exists("test_image_paths.npy"): # save the data to a file
    print("Saving features to files because they have not yet been computed")
    train_image_paths, train_labels = load("sift/train")
    test_image_paths, test_labels = load("sift/test")
    np.save("train_image_paths", train_image_paths)
    np.save("train_labels", train_labels)
    np.save("test_image_paths", test_image_paths)
    np.save("test_labels", test_labels)
else: # load the file because it exists
    print("Using files already saved for computational efficiency")
    train_image_paths = np.load("train_image_paths.npy")
    train_labels = np.load("train_labels.npy")
    test_image_paths = np.load("test_image_paths.npy")
    test_labels = np.load("test_labels.npy")

''' Step 1: Represent each image with the appropriate feature
 Each function to construct features should return an N x d matrix, where
 N is the number of paths passed to the function and d is the 
 dimensionality of each image representation. See the starter code for
 each function for more details. '''

build_model = input('\033[95m' + "Hit 'Enter' if you'd like to use a model already computed\nIf you want to create a new model, enter any characters and hit 'Enter'" + '\033[0m')

#TODO: You code build_vocabulary function in util.py
if len(build_model) == 0 and os.path.exists("kmeans.pkl") and os.path.exists("train_image_feats.npy") and os.path.exists("test_image_feats.npy"): # user selected to use model already computed
    print('\033[92m' + "Using model already computed from previous execution" + '\033[0m')
    # open and load the kmeans.pkl file. Argument "rb" = open the file with no truncation
    kmeans = pickle.load(open("kmeans.pkl", "rb"))
    print("Load histograms for training")
    train_image_feats = np.load("train_image_feats.npy")
    print("Load histograms for testing")
    test_image_feats = np.load("test_image_feats.npy")    
else:
    print('\033[93m' + 'Extracting SIFT features\n' + '\033[0m')
    kmeans = build_vocabulary(train_image_paths, vocab_size=vocab_size)
    # open the kmeans.pkl file. Argument "wb" = open and truncate the file
    pickle.dump(kmeans, open("kmeans.pkl", "wb"))
    print("Build histograms for training")
    #TODO: You code get_bags_of_sifts function in util.py 
    train_image_feats = get_bags_of_sifts(train_image_paths, kmeans)
    np.save("train_image_feats", train_image_feats)
    print("Build histograms for testing")
    test_image_feats = get_bags_of_sifts(test_image_paths, kmeans)
    np.save("test_image_feats", test_image_feats)

# Plot the 15 histograms for the 15 categories
sum_histogram_array = {}
average_histogram_array = {}
for i in range(train_image_feats.shape[0]):
    label = train_labels[i]
    # the histogram is all of the data stored at the label indices. feats.
    histogram = train_image_feats[i,:]
    if sum_histogram_array.get(label) is None:
        sum_histogram_array[label] = histogram
    else:
        sum_histogram_array[label] = sum_histogram_array[label] + histogram
for label, feats in sum_histogram_array.items():
    average_histogram_array[label] = feats/100.0
for label, histogram in average_histogram_array.items():
    indices = np.arange(0, vocab_size)
    histogram_diagram = plt.subplots()
    plt.bar(indices, histogram)
    plt.title(f"Histogram for label: {label}")
    plt.savefig(f"histogram_{label}.png")
    # plt.show()

''' Step 2: Classify each test image by training and using the appropriate classifier
 Each function to classify test features will return an N x l cell array,
 where N is the number of test cases and each entry is a string indicating
 the predicted one-hot vector for each test image. See the starter code for each function
 for more details. '''

print('Using nearest neighbor classifier to predict test set categories\n')
#TODO: YOU CODE nearest_neighbor_classify function from classifers.py
pred_labels_knn = nearest_neighbor_classify(train_image_feats, train_labels, test_image_feats, k)
print('Using support vector machine to predict test set categories\n')
#TODO: YOU CODE svm_classify function from classifers.py
pred_labels_svm = svm_classify(C, train_image_feats, train_labels, test_image_feats)

print('---Evaluation---\n')
# Step 3: Build a confusion matrix and score the recognition system for 
#         each of the classifiers.
# TODO: In this step you will be doing evaluation. 
# 1) Calculate the total accuracy of your model by counting number
#   of true positives and true negatives over all.
knn_accuracy_score = accuracy_score(test_labels, pred_labels_knn)
print(f"knn_accuracy_score: {knn_accuracy_score}")
svm_accuracy_score = accuracy_score(test_labels, pred_labels_svm)
print(f"svm_accuracy_score: {svm_accuracy_score}")

# 2) Build a Confusion matrix and visualize it. 
#   You will need to convert the one-hot format labels back
#   to their category name format. help from: https://www.stackvidhya.com/plot-confusion-matrix-in-python-and-why/
knn_confusion_matrix = confusion_matrix(test_labels, pred_labels_knn)
knn_heatmap = sns.heatmap(knn_confusion_matrix, annot=True, cmap="Blues")
knn_heatmap.set_title("Confusion Matrix for knn")
knn_heatmap.set_xlabel('\nPredicted Values')
plt.savefig(f"knn_confusion_matrix.png")
plt.show()

svm_confusion_matrix = confusion_matrix(test_labels, pred_labels_svm)
svm_heatmap = sns.heatmap(svm_confusion_matrix, annot=True, cmap="Blues")
svm_heatmap.set_title("Confusion Matrix for svm")
svm_heatmap.set_xlabel('\nPredicted Values')
plt.savefig(f"svm_confusion_matrix.png")
plt.show()





# Interpreting your performance with 100 training examples per category:
#  accuracy  =   0 -> Your code is broken (probably not the classifier's
#                     fault! A classifier would have to be amazing to
#                     perform this badly).
#  accuracy ~= .10 -> Your performance is chance. Something is broken or
#                     you ran the starter code unchanged.
#  accuracy ~= .40 -> Rough performance with bag of SIFT and nearest
#                     neighbor classifier. 
#  accuracy ~= .50 -> You've gotten things roughly correct with bag of
#                     SIFT and a linear SVM classifier.
#  accuracy >= .60 -> You've added in spatial information somehow or you've
#                     added additional, complementary image features. This
#                     represents state of the art in Lazebnik et al 2006.
#  accuracy >= .85 -> You've done extremely well. This is the state of the
#                     art in the 2010 SUN database paper from fusing many 
#                     features. Don't trust this number unless you actually
#                     measure many random splits.
#  accuracy >= .90 -> You used modern deep features trained on much larger
#                     image databases.
#  accuracy >= .96 -> You can beat a human at this task. This isn't a
#                     realistic number. Some accuracy calculation is broken
#                     or your classifier is cheating and seeing the test
#                     labels.