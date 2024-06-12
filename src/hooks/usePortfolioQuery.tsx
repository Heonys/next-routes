import { useQuery } from "@tanstack/react-query";
import { GetPortfolioListResponse } from "@/app/api/get-portfolio-list/route";
import { getPortfolioList } from "@/services";

const usePortfolioQuery = () => {
  const postsQuery = useQuery<GetPortfolioListResponse>({
    queryKey: ["portfolios"],
    queryFn: getPortfolioList,
  });

  return { postsQuery };
};

export default usePortfolioQuery;
