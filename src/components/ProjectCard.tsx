"use client";

import {
  AvatarGroup,
  Column,
  Flex,
  Heading,
  Media,
  Row,
  SmartLink,
  Text,
} from "@once-ui-system/core";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  return (
    <Row fillWidth gap="m" vertical="center" s={{ direction: "column", align: "center", gap: "24" }}>
      {images.length > 0 && (
        <Media
          src={images[0]}
          alt={title}
          aspectRatio="1 / 1"
          radius="l"
          maxWidth={40}
          sizes="(max-width: 960px) 100vw, 960px"
        />
      )}
      <Column
        fillWidth
        paddingX="m"
        s={{ paddingX: "0", textAlign: "center" }}
        paddingTop="12"
        paddingBottom="24"
        gap="m"
      >
        {title && (
          <Heading as="h2" wrap="balance" variant="display-strong-xs">
            {title}
          </Heading>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column gap="16">
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-l" onBackground="neutral-weak">
                {description}
              </Text>
            )}
            <Flex gap="24" wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href="/about"
                >
                  <Text variant="body-default-m">Voir +</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-m">View project</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Column>
    </Row>
  );
};
