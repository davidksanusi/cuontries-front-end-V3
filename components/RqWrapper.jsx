'use client';
import React from 'react'
import {
    QueryClientProvider,
    QueryClient
  } from '@tanstack/react-query';
  const queryClient = new QueryClient()

function RqWrapper({children}) {
  return (
    <QueryClientProvider client={queryClient}>
                    {children}
        </QueryClientProvider>


    )
}

export default RqWrapper