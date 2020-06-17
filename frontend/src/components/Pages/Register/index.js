import React from 'react';
import { Button, Form, Checkbox } from 'semantic-ui-react';

const Register = () => {
  return (
    <div>
      <Form>
        <Form.Field>
          <label htmlFor="username">
            Nom d'utilisateur
            <input id="username" placeholder="Nom d'utilisateur" />
          </label>
        </Form.Field>
        <Form.Field>
          <label htmlFor="mail">
            Adresse mail
            <input id="mail" placeholder="Adresse mail" />
          </label>
        </Form.Field>
        <Form.Field>
          <label htmlFor="password">
            Mot de passe
            <input id="password" placeholder="Mot de passe" />
          </label>
        </Form.Field>
        <Form.Field>
          <label htmlFor="password-confirm">
            Entrez le mot de passe à nouveau
            <input
              id="password-confirm"
              placeholder="Entrez le mot de passe à nouveau"
            />
          </label>
        </Form.Field>
        <Form.Field>
          <Checkbox label="Créateur de contenu ?" />
        </Form.Field>
        <Button type="submit">Créer votre compte Pixize</Button>
      </Form>
    </div>
  );
};

export default Register;
