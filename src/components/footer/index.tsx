import Link from 'next/link';
import { api } from 'services';

import { navItems } from './nav';
import * as S from './styles';

const Footer = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Image
          src="/assets/icon-32.png"
          alt="A white circle with a dark file icon outlined in the center"
        />
        <S.Project>Git Readme Creator</S.Project>
        <S.Mention>
          Developed and maintained by{' '}
          <a
            href="https://kashtechsolutions.com"
            target="_blank"
            rel="noreferrer"
          >
            Kashtech Solutions
          </a>
        </S.Mention>
      </S.Wrapper>

      <S.Nav>
        {navItems.map((item, i) => (
          <S.NavItem key={i} {...item.props}>
            {item.label}
          </S.NavItem>
        ))}
      </S.Nav>

      <Link href="/result" passHref>
        <S.GenerateLink onClick={() => api.put('generated-readmes')}>
          Generate README
        </S.GenerateLink>
      </Link>
    </S.Container>
  );
};

export { Footer };
