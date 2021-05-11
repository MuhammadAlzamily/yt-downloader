import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Container, Flex, Heading, Text, VStack } from "@chakra-ui/layout";
import React, { useState } from "react";
import axios from "axios";
export default function Downloader() {
  const [vidurl, setVidUrl] = useState(" ");
  const [loaded, setLoaded] = useState(false);
  const [downloadlink, setDownloadlink] = useState(" ");
  const buttonHandler = () => {
    const options = {
      method: "GET",
      url: "https://getvideo.p.rapidapi.com/",
      params: { url: vidurl },
      headers: {
        "x-rapidapi-key": "GET_YOUR_KEY",
        "x-rapidapi-host": "GET_YOUR_KEY",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setDownloadlink(response.data.streams[0].url);
        setLoaded(true);
        console.log(response.data.streams[0].url);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <div>
      <Flex
        height="100vh"
        alignItems="center"
        justifyContent="center"
        bg="lightblue"
      >
        <VStack
          fontFamily="cursive"
          fontWeight="bold"
          fontSize="lg"
          spacing={25}
        >
          <Heading size="lg" as="h3">
            YouTube Video Downloader V1.0
          </Heading>
          <Text size="lg">Paste in the url to the video then click search</Text>
          <Input
            bg="lightgray"
            variant="outline"
            value={vidurl}
            onChange={(e) => setVidUrl(e.target.value)}
          />
          <Button
            variant="outline"
            colorScheme="twitter"
            size="lg"
            onClick={buttonHandler}
          >
            SEARCH
          </Button>
          {!loaded ? (
            <Heading size="sm"></Heading>
          ) : (
            <a href={downloadlink}>
              <Button colorScheme="green" size="lg">
                {" "}
                DOWNLOAD NOW{" "}
              </Button>
            </a>
          )}
        </VStack>
      </Flex>
    </div>
  );
}
