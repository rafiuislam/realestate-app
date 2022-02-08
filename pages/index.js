import Image from "next/image";
import Link from "next/link";
import { Flex, Button, Text, Box } from "@chakra-ui/react";

const Banner = ({
    head,
    title1,
    title2,
    des1,
    des2,
    btntxt,
    imageUrl,
    linkName,
}) => (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
        <Image src={imageUrl} alt="banner" width={500} height={300} />
        <Box p="5">
            <Text color="gray.500" fontSize="sm" fontWeight="medium">
                {head}
            </Text>
            <Text fontSize="3xl" fontWeight="bold">
                {title1} <br /> {title2}
            </Text>
            <Text
                paddingTop="3"
                paddingBottom="3"
                fontSize="lg"
                color="gray.700"
            >
                {des1}
                <br />
                {des2}
            </Text>
            <Button fontSize="xl">
                <Link href={linkName}>{btntxt}</Link>
            </Button>
        </Box>
    </Flex>
);
export default function Home() {
    return (
        <div>
            <Banner
                head="Welcome to"
                title1="Rent a Home"
                title2="Dream Home"
                des1="Explore the latest properties in your city"
                des2="Find your dream home"
                btntxt="rent now"
                linkName="/search?head=for-sale"
                imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
            />
            <Banner
                head="Welcome to"
                title1="Rent a Home"
                title2="Dream Home"
                des1="Explore the latest properties in your city"
                des2="Find your dream home"
                btntxt="rent now"
                linkName="/search?head=for-sale"
                imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
            />
        </div>
    );
}
