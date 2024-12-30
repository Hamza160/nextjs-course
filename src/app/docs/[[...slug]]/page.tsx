import React from 'react';

interface DocsProps {
  params: {
    slug?: string[]; // This matches the expected dynamic route structure.
  };
}

const Docs = ({ params }: DocsProps) => {
  if (params?.slug?.length === 1) {
    return <h1>View docs for feature {params.slug[0]}</h1>;
  }

  if (params?.slug?.length === 2) {
    return (
      <h1>
        View docs for feature {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  }

  if (params?.slug?.length === 3) {
    return (
      <h1>
        View docs for feature {params.slug[0]} and concept of {params.slug[1]} and example of {params.slug[2]}
      </h1>
    );
  }

  return (
    <div>
      <h1>Docs Home Page</h1>
    </div>
  );
};

export default Docs;
