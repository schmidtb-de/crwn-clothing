import React, { useState } from "react"
import CollectionPreview from "../../components/collection-preview/CollectionPreview"
import SHOP_DATA from "./shop.data"

function ShopPage() {
  // eslint-disable-next-line no-unused-vars
  const [collections, setCollections] = useState(SHOP_DATA)

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

export default ShopPage
