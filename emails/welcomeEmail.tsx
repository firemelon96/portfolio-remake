import { Text } from '@react-email/text';
import { Section } from '@react-email/section';
import { Container } from '@react-email/container';

export default function EmailTemplate(
  name: string,
  email: string,
  message: string
) {
  return (
    <Section style={main}>
      <Container style={container}>
        <Text style={heading}>Portfolio Reach out</Text>
        <Text style={paragraph}>Name: {name}</Text>
        <Text style={paragraph}>Email: {email}</Text>
        <Text style={paragraph}>{message}</Text>
      </Container>
    </Section>
  );
}

// Styles for the email template
const main = {
  backgroundColor: '#ffffff',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  width: '580px',
};

const heading = {
  fontSize: '32px',
  lineHeight: '1.3',
  fontWeight: '700',
  color: '#484848',
};

const paragraph = {
  fontSize: '18px',
  lineHeight: '1.4',
  color: '#484848',
};
