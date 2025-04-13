function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    let startColor = image[sr][sc]
    if(startColor == color) return image
    return helperRec(image,sr,sc,color,startColor)
};

function helperRec(image: number[][], cr: number, cc: number, newColor: number, startColor: number): number[][] {
    if(cr > image.length-1 || cr < 0 || cc > image[cr].length-1 || cc < 0 || image[cr][cc] != startColor) return

    image[cr][cc] = newColor
    helperRec(image, cr+1,cc,newColor,startColor)
    helperRec(image, cr-1,cc,newColor,startColor)
    helperRec(image, cr,cc+1,newColor,startColor)
    helperRec(image, cr,cc-1,newColor,startColor)
    return image
}
