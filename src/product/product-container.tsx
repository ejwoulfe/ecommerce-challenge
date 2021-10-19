import InfoPanel from "./product-info-panel/info-panel";
import ImagePanel from "./product-image-panel/image-panel";
import './product-container.scss';

function ProductContainer() {
    return (
        <div id="product-container">
            <ImagePanel />
            <InfoPanel />
        </div>
    );
}

export default ProductContainer;