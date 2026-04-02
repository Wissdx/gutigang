"use client";

import { useState } from "react";
import { Button, IconButton, Dialog, Text, Flex, Row, useToast } from "@once-ui-system/core";
import React from "react";

interface SocialLinkProps {
  icon: string;
  link: string;
  name: string;
  size?: "s" | "m" | "l";
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
  tooltip?: string;
  label?: string;
}

export const SocialLink: React.FC<SocialLinkProps> = ({
  icon,
  link,
  name,
  size = "s",
  variant = "secondary",
  tooltip,
  label,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { addToast } = useToast();

  // Robust check for ESN
  const isEsn = icon === "esn" || (name && name.toLowerCase().includes("esn"));

  const handleClick = (e: React.MouseEvent) => {
    if (isEsn) {
      e.preventDefault();
      e.stopPropagation();
      console.log("ESN Click Intercepted - name:", name);
      setIsDialogOpen(true);
    }
  };

  const handleConfirm = () => {
    window.open(link, "_blank");
    setIsDialogOpen(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("GUTI");
    addToast({
      variant: "success",
      message: "Code GUTI copié !",
    });
  };

  return (
    <>
      {label ? (
        <Button
          href={isEsn ? undefined : link}
          prefixIcon={icon}
          label={label}
          size={size as any}
          variant={variant as any}
          onClick={handleClick}
        />
      ) : (
        <IconButton
          href={isEsn ? undefined : link}
          icon={icon}
          tooltip={tooltip}
          size={size as any}
          variant={variant as any}
          onClick={handleClick}
        />
      )}

      {isEsn && (
        <Dialog
          className="esn-dialog"
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          title="Partenaire ESN"
          footer={
            <Flex gap="8" horizontal="end">
              <Button variant="secondary" onClick={() => setIsDialogOpen(false)} size="s">
                Annuler
              </Button>
              <Button variant="primary" onClick={handleConfirm} size="s">
                Continuer vers ESN
              </Button>
            </Flex>
          }
        >
          <Flex direction="column" gap="12" paddingTop="12" s={{ gap: "8", paddingTop: "8" }}>
            <Text variant="body-default-m" className="esn-popup-text">
              Vous allez être redirigé vers le site de compléments alimentaires ESN.
            </Text>
            <Row
              background="brand-alpha-weak"
              padding="16"
              radius="m"
              border="brand-alpha-medium"
              horizontal="center"
              vertical="center"
              gap="12"
              s={{ padding: "8", gap: "8" }}
            >
              <Text variant="display-strong-xs" onBackground="brand-strong" align="center" className="esn-popup-code">
                CODE : GUTI
              </Text>
              <IconButton
                icon="copy"
                size="s"
                variant="ghost"
                tooltip="Copier le code"
                onClick={copyToClipboard}
              />
            </Row>
            <Text variant="body-default-s" onBackground="neutral-weak" className="esn-popup-subtext">
              Utilisez ce code lors de votre commande pour soutenir le coach !
            </Text>
          </Flex>
        </Dialog>
      )}
    </>
  );
};
