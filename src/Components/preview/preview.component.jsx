import React from "react";
import "./preview.styles.scss";
import CollectionItems from "../../Components/collection-items/collection-items";

const PreviewComponent = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...itemProps }) => (
          <CollectionItems key={id} {...itemProps} />
        ))}
    </div>
  </div>
);

export default PreviewComponent;
