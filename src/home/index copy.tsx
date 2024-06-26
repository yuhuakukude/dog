import { Box, Link, Stack, styled, Typography } from '@mui/material'
import { CommonContainer } from '../components/Styled'
// import Button from '../components/Button/Button'
import Logo from '../assets/1.jpg'
import bg1 from '../assets/a2.jpg'
import bg2 from '../assets/2.jpg'
// import bg1 from '../assets/svg/bg1.svg'

const ca = '9kCJx9RHhghso9ZQSsaL12XZTXx1qBJpyUjr6iq1umqj'

const Wrapper = styled(Box)(({ theme }) => ({
  maxWidth: 1260,
  width: '100%',
  margin: 'auto',
  position: 'relative',
  background: `url(${bg1.src}) no-repeat`,
  backgroundPosition: 'right',
  backgroundSize: 'auto 100%',
  [theme.breakpoints.down('md')]: {
    background: 'none',
  },
}))

// const StyledLink = styled(Link)({
//   display: 'block',
//   textDecoration: 'none',
//   '& button': {
//     width: '100%',
//   },
// })

export default function Index() {
  return (
    <Wrapper>
      <CommonContainer>
        <Link
          underline="none"
          href="#/"
          sx={{
            position: 'absolute',
            top: 40,
          }}
        >
          <img alt="" style={{ height: 60 }} src={Logo.src} />
        </Link>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            minHeight: '100vh',
            paddingLeft: '5%',
            maxWidth: { md: '60%' },
            padding: { md: '40px 0', xs: '150px 0 0' },
          }}
        >
          <Box>
            <Typography variant="h2" fontSize={{ md: 64, xs: 32 }}>
              GMDOG
            </Typography>
            <Typography mt={'16px'} variant="body1" fontSize={{ md: 24, xs: 16 }} maxWidth={540}>
              Total supply 1B
            </Typography>
            {/* <Box mt="35px" display={'grid'} gap="15px" gridTemplateColumns="repeat(auto-fill, 200px)">
              <StyledLink
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfQCF3ja2LTZDs7biIdydPUvl5bStCajC_NxboPCd9t6SEDUQ/viewform?usp=pp_url"
              >
                <Button>Request Demo</Button>
              </StyledLink>
              <StyledLink
                target="_blank"
                href="https://drive.google.com/file/d/1h7behe49PkvqzFb-CRU5iev24X01FmZJ/view?usp=sharing"
              >
                <Button>Whitepaper</Button>
              </StyledLink>
              <StyledLink target="_blank" href="https://docs.multievent.xyz/">
                <Button>Learn More</Button>
              </StyledLink>
              <StyledLink href="mailto://Contact@multievent.xyz">
                <Button>Contact Us</Button>
              </StyledLink>
            </Box> */}

            <Box
              mt={2}
              sx={{
                '& img': {
                  maxHeight: { sm: 200, xs: 260 },
                  maxWidth: '80%',
                },
              }}
            >
              <img alt="" src={bg2.src} />
            </Box>

            <Stack
              mt={2}
              spacing={1}
              sx={{
                '& a': {
                  color: '#000',
                  fontSize: 20,
                  fontWeight: 600,
                },
              }}
            >
              <Typography
                fontSize={20}
                sx={{
                  wordBreak: 'break-all',
                }}
                fontWeight={600}
              >
                Address: {ca}
              </Typography>
              <Link target="_blank" href={`https://pump.fun/${ca}`}>
                Pump
              </Link>
            </Stack>

            <Box
              sx={{
                display: { md: 'none', sm: 'block' },
                '& img': {
                  maxWidth: '100%',
                },
              }}
            >
              <img src={bg1.src} alt="" />
            </Box>
            <ButtonGroupA />
          </Box>

          {/* <Box
            sx={{
              position: 'absolute',
              bottom: 20,
              display: 'grid',
              fontWeight: 700,
              '& a': {
                color: '#000',
              },
            }}
          >
            <Link underline="hover" target={'_blank'} href="https://t.me/gmdogsol">
              twitter & X
            </Link>
          </Box> */}
        </Box>
      </CommonContainer>
    </Wrapper>
  )
}

function ButtonGroupA() {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 25,
        right: { md: 200, xs: '45vw' },
        zIndex: 10,
        width: { xs: '45vw', md: '270px' },
        height: '50px',
        display: 'grid',
        gridTemplateColumns: '33.3% 33.3% 33.3%',
        gap: '5px',
        '& a': {
          display: 'block',
          height: '50px',
          // background: 'rgba(255,255,255,0.6)',
          cursor: 'pointer',
        },
      }}
    >
      <Link target="_blank" href={`https://dexscreener.com/solana/${ca}`}></Link>
      <Link target="_blank" href="https://twitter.com/Daisyonsolona"></Link>
      <Link target="_blank" href="https://t.me/gmdogsol"></Link>
    </Box>
  )
}
