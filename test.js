//easy

// 1  Search Insert Position

var searchInsert = function(nums, target) {
    
    let left = 0, right = nums.length-1
    if(target<nums[left]) return 0
    if(target>nums[right]) return right+1

    let mid = left+Math.floor((right-left)/2)
    while(left<=right){
         mid = left+Math.floor((right-left)/2)

        if(nums[mid]===target) return mid

        if(target<nums[mid]){
            right= mid-1
        }else if(target>nums[mid]){
            left = mid+1
        }
    }
    // if(target>nums[mid]) return left
    // else return left-1
    return left
};

// 2 Summary Ranges
// https://leetcode.com/problems/summary-ranges/description/
var summaryRanges = function(nums) {

    if(!nums.length) return []
    
    let left = nums[0]
    let right = nums[0]
    let res = []

    for(let i = 1; i< nums.length; i++){
        if(nums[i]===right+1){
            right = nums[i]
        }else{
            if(left === right){
                res.push(String(left))
                left = nums[i]
                right = nums[i]
            }
            else{
                res.push(`${left}->${right}`)
                left = nums[i]
                right = nums[i]
            }
        }
    }
     if(left === right){
         res.push(String(left))
                
        }
        else{
            res.push(`${left}->${right}`)
        }
    return res
};

//3 Build Array from Permutation
var buildArray = function(nums) {
    let arr = []

    for(let i  = 0; i< nums.length; i++){
        arr[i] = nums[nums[i]]
    }
    return arr
};

//




//medium

// spiral matrix 2

var generateMatrix = function(n) {
    
    let arr = new Array(n).fill(0)
    let matrix =[]
    for(let i = 0; i<n; i++){
        matrix.push(arr.slice())
    }

    let top = 0, bottom = n-1, left= 0, right = n-1
    let count = 1
    while(top<=bottom && left<=right){
        for(let i = left; i<=right; i++){
            matrix[top][i] = count++
        }
        top++
        for(let i = top; i<= bottom; i++){
            matrix[i][right] = count++
        }
        right--
        if(top<bottom){
            for(let i = right; i>=left; i--){
                matrix[bottom][i] = count++
            }
            bottom--
        }
        if(left<right){
            for(let i = bottom;i>=top; i--){
                matrix[i][left] = count++
            }
            left++
        }
    }

    return matrix
    
};

//hard

//2 nqueen

var solveNQueens = function(n) {
    let board = new Array(n).fill(0).map(()=>new Array(n).fill("."))
    let res = []
    find(0,board,res)
    return res
};

function find(col,board,res){
    if(col===board.length){
        res.push(board.map(ele=>ele.join("")).slice())
        return
    }
    for(let row = 0; row<board.length; row++){
        if(isValid(board,row,col)){
            board[row][col] = "Q"
            find(col+1,board,res)
            board[row][col] = "."
        }
    }
}

function isValid(board,row,col){
    let orirow = row
    let oricol = col

    while(row>=0&&col>=0){
        if(board[row][col]==="Q") return false
        row--
        col--
    }

    row = orirow
    col = oricol

    while(col>=0){
        if(board[row][col]==="Q") return false
        col--
    }

    row = orirow
    col = oricol

    while(col>=0 && row<board.length){
        if(board[row][col]==="Q") return false
        col--
        row++
    }
    return true
}