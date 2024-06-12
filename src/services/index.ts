import { FormType } from "@/types";

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getPortfolioList() {
  const response = await fetch(`${baseURL}/api/get-portfolio-list`);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export async function getReviewList() {
  const response = await fetch(`${baseURL}/api/get-review-list`);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

export async function postNewForm(formData: FormType) {
  const response = await fetch(`${baseURL}/api/new-form`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  const data = await response.json();
  return data;
}
