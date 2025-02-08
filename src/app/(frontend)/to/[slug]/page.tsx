import FlipBook from '@/components/FlipBook'
import { getPayload } from 'payload'
import React from 'react'
import { notFound } from 'next/navigation'
import configPromise from '@payload-config'

export default async function Page({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>
}) {
  const params = await paramsPromise
  const payload = await getPayload({ config: configPromise })

  try {
    const wordsQuery = await payload.find({
      collection: 'words',
      where: {
        slug: {
          equals: params.slug,
        },
      },
    })

    const wordData = wordsQuery.docs?.[0]

    if (!wordData) {
      return notFound()
    }

    return <FlipBook {...wordData} />
  } catch (error) {
    console.error('Error fetching word:', error)
    return notFound()
  }
}
