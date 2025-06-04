// import { cache } from "react"
// import type { HomePageData } from "@/types/home"
// import type { AboutPageData } from "@/types/about"
// // import type { ServicesPageData } from "@/types/services"
// import { fallbackHomeData } from "@/data/fallback/home"
// import { fallbackAboutData } from "@/data/fallback/about"
// // import { fallbackServicesData } from "@/data/fallback/services"

// const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"

// /**
//  * Helper to fetch data from Strapi API
//  */
// async function fetchAPI(path: string, options = {}) {
//   const defaultOptions = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }

//   const mergedOptions = {
//     ...defaultOptions,
//     ...options,
//   }

//   const res = await fetch(`${API_URL}${path}`, mergedOptions)

//   if (!res.ok) {
//     console.error(`API error: ${res.status} ${res.statusText}`)
//     throw new Error(`API error: ${res.status}`)
//   }

//   const data = await res.json()
//   return data
// }

// // /**
// //  * Get home page data from Strapi
// //  */
// // export const getHomePageData = cache(async (): Promise<HomePageData> => {
// //   try {
// //     const data = await fetchAPI("/api/home-page?populate=deep")
// //     return data.data.attributes
// //   } catch (error) {
// //     console.error("Error fetching home page data:", error)
// //     // Return fallback data for development
// //     return fallbackHomeData
// //   }
// // })

// /**
//  * Get about page data from Strapi
//  */
// export const getAboutPageData = cache(async (): Promise<AboutPageData> => {
//   try {
//     const data = await fetchAPI("/api/about-page?populate=deep")
//     return data.data.attributes
//   } catch (error) {
//     console.error("Error fetching about page data:", error)
//     // Return fallback data for development
//     return fallbackAboutData
//   }
// })

// // /**
// //  * Get services page data from Strapi
// //  */
// // export const getServicesPageData = cache(async (): Promise<ServicesPageData> => {
// //   try {
// //     const data = await fetchAPI("/api/services-page?populate=deep")
// //     return data.data.attributes
// //   } catch (error) {
// //     console.error("Error fetching services page data:", error)
// //     // Return fallback data for development
// //     return fallbackServicesData
// //   }
// // })
