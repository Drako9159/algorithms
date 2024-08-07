const arr = [0,1,2,3,4,5];
function binarySearch(arr: number[], target: number): number {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right){
        const mid = Math.floor((left + right) / 2);
        const midValue = arr[mid];

        if(midValue == target) {
            return mid;
        }

        if(midValue < target){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

