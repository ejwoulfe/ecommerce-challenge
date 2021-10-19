import { useState } from "react";
import './image-panel.scss';
import productOneThumbnail from '../../assets/image-product-1-thumbnail.jpg';
import productTwoThumbnail from '../../assets/image-product-2-thumbnail.jpg';
import productThreeThumbnail from '../../assets/image-product-3-thumbnail.jpg';
import productFourThumbnail from '../../assets/image-product-4-thumbnail.jpg';
import productOneImage from '../../assets/image-product-1.jpg';
import productTwoImage from '../../assets/image-product-2.jpg';
import productThreeImage from '../../assets/image-product-3.jpg';
import productFourImage from '../../assets/image-product-4.jpg';


function ImagePanel() {
    const [thumbnailsArray] = useState<string[]>([productOneThumbnail, productTwoThumbnail, productThreeThumbnail, productFourThumbnail]);
    const [productsArray] = useState<string[]>([productOneImage, productTwoImage, productThreeImage, productFourImage]);
    const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);



    function createThumbNails(thumbnailsArr: string[]) {
        return (thumbnailsArr.map((thumbnail, index) => {

            if (index === currentImgIndex) {
                return <img className="product-thumbnail-current" src={thumbnail} onClick={() => setCurrentImgIndex(index)} alt={"product " + index + " thumbnail"} />

            } else {
                return <img className="product-thumbnail" src={thumbnail} onClick={() => setCurrentImgIndex(index)} alt={"product " + index + " thumbnail"} />
            }
        })
        )

    }



    return (
        <div id="panel-container">
            <div id="product-images-container">
                <div id="main-image-container">
                    <img id="main-image" src={productsArray[currentImgIndex]} alt="product preview" />
                </div>
                <div id="thumbnail-row">
                    {thumbnailsArray.length > 0 ? createThumbNails(thumbnailsArray) : <h4>Loading Product Thumbnails</h4>}
                </div>
            </div>
        </div>

    );
}

export default ImagePanel;