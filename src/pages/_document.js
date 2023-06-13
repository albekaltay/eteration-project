import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Eteration</title>
        <link
          rel="icon"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFe0lEQVR4AdWXA5BkWRBFT75f7e6drZm1bdu2bdu2bdu2bdu2NVa76///3svNiOkxWssTdSLD92aW+bcRusnSSy8jIcTyPWeINdtNo5XVCdqQ05YiLdNe90H+txRYcfkVqmOMc5lLqupiUXW2YhKnXqROa1YoEheuo7nS0TcqnwNvILw3zfUfDu1xgdVWWXV6C93Q3MxczOxtiqpiE5vUJLDc5LDddDBVOahSAisi3ATcZUUau1xg3bXX6eVD2C6GsG8IYT4LS0xGasFmNDGVYC5TFA6fI6HORTQoKB7hfuAwKzGAcXBMhA032HAhEbnDvBSRBW0mTABVRm3iEN4frrzd7ChUlyMVBUikAGxrHsAEKDABNtt0szW995chMs+oIMYiM/8wvxb4UWEokIgwXR504e9amH+dqvJqVwho5tHU9HGlAXssXjPNDR+2TLLA1lttvZaFXyciM8v4z9Fg83nzIRF5Hxjw7ocfZLSzzFJLywd9W+rOXbn3UVJZOJ7Eg3MgAqlXtXaTvMCOO+y0sPf5pWLho+4qgtEg8CBwjap+8tY7b+dMgHfee1eBxmVmn7Ms5h4tOHACgimfTH3Ve60TLbD77nv0yvP89DHPbqj5voicZsHPvfbG6zkd0HDj9jNp7teXxIEzGbEAyMMdvQY2EpG1aUdEPMgdAie98OILv9MJmp44yGl9014kbn6y9nBVQB/Eh7cmWmDfffevstNvK0i5jAjPzUvM05957tkmOol4vx6V5fuStz/vBqpfAef3OfbpbFIXmFNElkAwUBG53jz1iSefaKGTtDx32KL4cC5OercHYw4xjy0e+OA3GBMtICILIdIHQ8S9Jrb5Qw8/1OnwtteOmVdDvAon8yECCkRtRPX42NT6OEZHBWYTcILUO+fOvPe+ewfQSUpvHr8QcA3iltFR4bFBYjw+ltKbbHvtRAGKIIiTZ0Bf7fTmrx+7LCK2uSwiTgEzuMEkyTFR8lt77XRrwOiwAEguAiLuidvvuD2jE7S+eOTaKJcjzDnq7PAbTg4lhofrNrlaMTpZQPuDNDiRb+iAxpt3lGSq4hYa48XEOD1BkKig+i3K/tWrnvcinWRUAVU+B4Yh0sIkGH7FFiK1VdupDxeLkykxVBUV+VxE9q5a+Zy3MbpRIH4K+qMIvZgErrZqE839RYiFCyNf7d9I4vaqWuOCd+gGDuOqq64cHKM+pqpzTHT7yzdfWrP8Aisw1ahvuCwfoHl+SHU3w0cVMNAY748xlu26624VjMPQs9ad0oLOtODZNM0tOMPMYpqdVbvB5c9i9LjA9TdcN8AKvAzUMA629a4WvKptjKbZCEvZU5L7m+kGSy2xZGGZJZeqmNAvot/MenMUgw5bfkYL28UKuJHhrS2ep39Ovqvb4ZZmusgSiy5WrjHOG2MsxxA6YOD+S20j5YU7pKIssUlifudrua1/728bS37j22+9+dsuhBeBdRH58oOPPvwUw9EBmoV5tJQndgVMYimlf2tCKbq5JYaLttl6mzk6cfKKJRZbfHXgTLM+EfmMdgp0hGqz+ggxxybiE0KMYCisF2OcaeONNr4+y9LnsyzvG0JIg/fYrIoxTtv+H2IzoIjImbb5cxidLyDyPPCLBp2F6O0RmC5poIrJSQFjAfNikEEi8ptAPSDmFOaMZrn5sMCR73/04ffd+mMyYM/F1wWOR3VxoDKK4w2dihfTIkNLnixN8XlKnnubOT4EYgj1doWXVfU68+X3Png/7dFfMytRRHVZkDVAl4giM/4YaiZ7L60u+7Yt0f5tsVTK/VDv/ffB+7cs/MUY4xdvv/tO6a/8c2pFFhOQaof2qSAWWzWp/DCtig/WVzf/1qrDYvDDX37l5Yz/C38CcCv8zm9KULYAAAAASUVORK5CYII="
          sizes="any"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
