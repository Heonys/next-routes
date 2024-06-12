import { Review } from "@/app/api/get-review-list/route";
import * as S from "./style";

type Props = {
  category: Review["category"];
};

const categoryLabels = {
  Market: "마켓",
  Contest: "콘테스트",
  Deal: "1:1 의뢰",
};

const CategoryBadge = ({ category }: Props) => {
  return <S.CategoryBadge type={category}>{categoryLabels[category]}</S.CategoryBadge>;
};

export default CategoryBadge;
