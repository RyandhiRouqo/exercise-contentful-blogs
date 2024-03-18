import { ContentfulResponse } from "@/types/contentful.type";
import { appConfig } from "./config";

export const getEntries = async (): Promise<ContentfulResponse> => {
  const { accessToken, baseUrl, environmentId, spaceId } = appConfig;

  const response = await fetch(
    baseUrl +
      `/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`,
    {
      cache: "no-store",
    }
  );

  return response.json();
};

export const getEntriesBySlug = async (
    slug: string
  ): Promise<ContentfulResponse> => {
    const { accessToken, baseUrl, environmentId, spaceId } = appConfig;
  
    const response = await fetch(
      baseUrl +
        `/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&fields.slug=${slug}&content_type=blog`,
      {
        cache: "no-store",
      }
    );
  
    return response.json();
  };