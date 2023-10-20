// Some of the fuctions here were inspired by https://www.geeksforgeeks.org/generate-all-the-permutation-of-a-list-in-python/ and looking at other students code
function permutationSort(list) {
    //Check if the list length is 0
    if (list.length == 0) { 
        return []; 
    }

    //Get the list of permutations and start to go through and check if they are sorted
    var permList = getPerms(list);
    var i = 0;
    var terminate = false
    while(!terminate) {
        terminate = isListSorted(permList[i++])
    }

    console.log("I went through " + i + " permutations to find the sorted list:");
    console.log(permList[i--])
    return (permList[i]);
}

//This function simply checks if the list is sorted
function isListSorted(list) {
    for (let i = 0; i < list.length - 1; i++) {
        if (list[i] > list[i + 1]) { 
            return false; 
        }
    }
    return true;
}

//This function get the permutations of the list and returns a list full of them
function getPerms(list) {
    //Initially just check the very basic cases
    if (list.length == 0) { return []; }
    if (list.length == 1) {return [list]; }
    
    //Loop through and find all of the permutations
    var permList = [];
    for(let i = 0; i < list.length; i++) {
        var m = list[i];
        var remainingList = [...list.slice(0, i), ...list.slice(i + 1)];
        var permutations = getPerms(remainingList);

        //This loop just adds all the permutations to the list
        for(let i = 0; i < permutations.length; i++) {
            permList.push([m, ...permutations[i]])
        }
    }
    return permList
}