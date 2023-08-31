import { events } from 'app';
import { Modals } from 'types';
import * as S from './styles';
export default function About() {
  return (
    <S.Container>
      <S.Header>
        <h1>Welcome To Profile Readme Generator</h1>
        <h2>
          <span>🚀</span> The best profile readme generator you will find
          <span>⚡</span>
        </h2>
      </S.Header>

      <ol style={{ textAlign: 'justify', paddingTop: '20px' }}>
        <li style={{ padding: '20px' }}>
          Step 1:- Generete readme file using this website.
        </li>

        <li style={{ padding: '20px' }}>
          step 2:- Make new git hub repo in your account with same name as your
          user name eg username='juniadmugloo' so repo name ='junaidmugloo'
        </li>

        <li style={{ padding: '20px' }}>
          step 3:- Copy the readme file from this website and paste in your new
          repo's readme file.
        </li>

        <li style={{ padding: '20px' }}>
          step 4:- make changes if you want and commit it.
        </li>

        <li style={{ padding: '20px' }}>
          step 5:- reload your browser and enjoy.
        </li>

        <li style={{ padding: '20px' }}>
          step 6:- For more info contact{' '}
          <a href="https://instagram.com/juniad_mugloo">Link</a>
        </li>
      </ol>
      <br />
      <br />
      <br />

      <S.Footer>
        <p>
          If you like it, give the{' '}
          <a
            href="https://github.com/junaidmugloo"
            target="_blank"
            rel="noreferrer"
          >
            project repository
          </a>{' '}
          a star on Github and{' '}
          <button onClick={() => events.modal.open(Modals.SHARE)}>share</button>{' '}
          with your friends!! I will be happy with it! ❤
        </p>
      </S.Footer>
      <br />
      <a
        style={{
          backgroundColor: '#30a14e',
          color: 'white',
          borderRadius: '6px',
          padding: '0.5rem 1.6rem',
        }}
        href="/"
      >
        Back to Home
      </a>
    </S.Container>
  );
}
