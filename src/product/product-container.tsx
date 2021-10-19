import DescriptionPanel from "./product-description-panel/description-panel";
import ImagePanel from "./product-image-panel/image-panel";
import './product-container.scss';

function ProductContainer() {
    return (
        <div id="product-container">
            <ImagePanel />
            <DescriptionPanel />
        </div>
    );
}

export default ProductContainer;