import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Center, Heading, Text, VStack } from "@chakra-ui/layout";
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
        "x-rapidapi-key": "6f8f5d760bmsh67db04f0c711434p11b987jsne23a91fa6cc9",
        "x-rapidapi-host": "getvideo.p.rapidapi.com",
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
      <Center bg="lightpink" fontFamily="cursive" h="2xl" fontWeight="bold">
        <VStack spacing={25}>
          <Heading size="2xl" as="h3">
            YouTube Video Downloader
          </Heading>
          <Text size="lg">
            Paste in the url to the video then click download
          </Text>
          <Input
            w="2xl"
            bg="lightgray"
            variant="filled"
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
      </Center>
    </div>
  );
}
