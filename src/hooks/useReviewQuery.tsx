import { useQuery } from "@tanstack/react-query";
import { GetReviewListResponse } from "@/app/api/get-review-list/route";
import { getReviewList } from "@/services";

const useReviewQuery = () => {
  const postsQuery = useQuery<GetReviewListResponse>({
    queryKey: ["reviews"],
    queryFn: getReviewList,
  });

  return { postsQuery };
};

export default useReviewQuery;
