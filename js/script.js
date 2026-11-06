let nightScenes = ["anatolykostinunsplash", "lightivanunsplash", "nikolaydukounsplash", "stevencordesunsplash"];
let counter = 0;

function rotate() {
    document.getElementById("nightphoto").src="Images/" + nightScenes[counter] + ".jpg";

    if (counter >= nightScenes.length - 1) {
        counter = 0;
    } else {
        counter = counter + 1;
    }
}