import React from "react";
import AdvantagesCard from "/src/components/ui/advantages-card/advantages-card";
import { Advantages, StyledButton, StyledTitle } from "./style";
import { Ul, Li } from "/src/components/styled";
import { AppRoute } from "/src/const";

// Список преимуществ

function AdvantagesFarmProduct({
  advantagesList // преимущества - массив объектов с id, title, owner, isNegative, image, about
}) {
  return advantagesList && advantagesList.length ? (
    <Advantages>
      <StyledTitle as="h2">Почему фермерские продукты лучше?</StyledTitle>
      <Ul $isGridList>
        {advantagesList.map((advantage) => (
          <Li key={advantage.id}>
            <AdvantagesCard {...advantage} />
          </Li>
        ))}
      </Ul>
      <StyledButton link={AppRoute.BUY}>Купить</StyledButton>
    </Advantages>
  ) : null;
}

export default AdvantagesFarmProduct;
