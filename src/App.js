import React from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import Downloader from './components/Downloader'



export default function App() {
    return (
        <ChakraProvider>
            <Downloader />
        </ChakraProvider>
    )
}
