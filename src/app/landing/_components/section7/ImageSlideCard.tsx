import Image from "next/image";
import { Review } from "@/app/api/get-review-list/route";
import Rate from "./Rate";
import CategoryBadge from "./CategoryBadge";
import * as S from "./style";
import { EmptythumbnailIcon } from "@/assets/images";

type Props = {
  review: Review;
};

const ImageSlideCard = ({
  review: { thumbnail, rate, reviewDate, reviewer, comment, productType, category },
}: Props) => {
  return (
    <S.SlideCard>
      <S.SlideHeader>
        <S.ImageContainer>
          {thumbnail ? (
            <Image src={thumbnail} fill alt="thumbnail" style={{ borderRadius: "4px" }} />
          ) : (
            <S.EmptyThumbnail>
              <EmptythumbnailIcon />
            </S.EmptyThumbnail>
          )}
        </S.ImageContainer>

        <S.HeaderRight>
          <Rate rate={rate} />
          <S.HeaderFooter>
            <S.ReviewerText>{reviewer}</S.ReviewerText>
            <S.DateText> | </S.DateText>
            <S.DateText>{reviewDate}</S.DateText>
          </S.HeaderFooter>
        </S.HeaderRight>
      </S.SlideHeader>
      <S.SlideDescription>{comment}</S.SlideDescription>
      <S.SlideFooter>
        <CategoryBadge category={category} />
        <S.ProductType>구매등급: {productType}</S.ProductType>
      </S.SlideFooter>
    </S.SlideCard>
  );
};

export default ImageSlideCard;
