import React from "react";
import Title, { TitleSize } from "../title/title";
import { Advantages, Image, Owner, Header, Text } from "./style";

function AdvantagesCard({
  title, // название особенности
  owner, // владелец особенности (обычный магазин, фермерский)
  about, // описание особенности
  isNegative, // является ли особенность отрицательной
  image // иконка
}) {
  return (
    <Advantages isNegative={isNegative}>
      <Header>
        <Image width={56} height={56} src={image} alt={title} />
        <div>
          <Owner isNegative={isNegative}>{owner}</Owner>
          <Title as="h3" size={TitleSize.EXTRA_SMALL}>
            {title}
          </Title>
        </div>
      </Header>
      <Text dangerouslySetInnerHTML={{ __html: about }} />
    </Advantages>
  );
}

export default AdvantagesCard;
