import { Row, IconButton, SmartLink, Text } from "@once-ui-system/core";
import { SocialLink } from "@/components";
import { person, social } from "@/resources";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Row as="footer" fillWidth padding="8" horizontal="center" s={{ direction: "column" }}>
      <Row
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="between"
        vertical="center"
        s={{
          direction: "column",
          horizontal: "center",
          align: "center",
        }}
      >
        <Row gap="16">
          {social.map(
            (item) =>
              item.link && (
                <SocialLink
                  key={item.name}
                  link={item.link}
                  icon={item.icon}
                  name={item.name}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              ),
          )}
        </Row>
        <Text variant="body-default-s" onBackground="neutral-strong">
          <Text onBackground="neutral-weak">© {currentYear} /</Text>
          <Text paddingX="4">{person.name}</Text>
          <Text onBackground="neutral-weak">
            {/* L'utilisation de ce template nécessite attribution. Ne retirez pas le lien vers Once UI sauf si vous avez une licence Pro. */}
            / Portfolio basé sur {" "}
            <SmartLink href="https://once-ui.com/products/magic-portfolio">Once UI</SmartLink>
          </Text>
        </Text>
      </Row>
    </Row>
  );
};
