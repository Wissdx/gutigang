import {
  Avatar,
  Button,
  Column,
  Heading,
  Media,
  Meta,
  Schema,
  Text,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {work.title}
      </Heading>
      <Column fillWidth gap="m" horizontal="center">
        <Column maxWidth={40} gap="8" horizontal="center" paddingTop="8">
          <Text variant="heading-strong-l" align="center">
            Intéressé·e par un accompagnement personnalisé ?
          </Text>
          <Text variant="body-default-m" onBackground="brand-weak" align="center">
            Discutez d'un potentiel coaching avec Julien — entraînement, programmation
            personnalisée et préparation aux compétitions. Envoyez un email pour fixer
            un appel de découverte.
          </Text>

          <Row gap="8" horizontal="center" paddingTop="12">
            <Button
              href={`mailto:${person.email}?subject=${encodeURIComponent(
                "Demande de coaching - GutiGang",
              )}&body=${encodeURIComponent(
                "Bonjour Julien,\nJe souhaite discuter d'un accompagnement en coaching. Voici quelques informations sur moi :\n- Objectifs : \n- Niveau actuel : \n- Disponibilités pour un appel : \nMerci,\n",
              )}`}
              label="Contacter par email"
              prefixIcon="email"
              size="l"
              variant="primary"
            />
          </Row>
        </Column>

        <Row fillWidth horizontal="center" paddingTop="16">
          <Media
            src="/images/projects/project-01/rejoins_gutigang.jpg"
            alt="Rejoins GutiGang"
            radius="m"
            style={{ maxWidth: 420, width: "100%", height: "auto" }}
          />
        </Row>
      </Column>
    </Column>
  );
}
