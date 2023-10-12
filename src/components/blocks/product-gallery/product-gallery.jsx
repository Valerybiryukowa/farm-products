import React from "react";
import { StyledSection } from "./style";
import Gallery from "/src/components/ui/gallery/gallery";

// Галерея фермерских продуктов
function ProductGallery({ slides }) {
  return slides && slides.length ? (
    <StyledSection>
      <Gallery slides={slides} />
    </StyledSection>
  ) : null;
}

export default ProductGallery;
