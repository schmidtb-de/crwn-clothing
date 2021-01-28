import React from "react"
import "./CollectionPreview.scss"
import CollectionItem from "../collection-item/CollectionItem"

function CollectionPreview({ title, items }) {
  return (
    <div>
      <div className="collection-preview">
        <h1 classsName="title">{title.toUpperCase()}</h1>
        <div className="preview">
          {items
            .filter((item, idx) => idx < 4)
            .map(({ id, ...otherItemProps }) => (
              <CollectionItem key={id} {...otherItemProps} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default CollectionPreview
