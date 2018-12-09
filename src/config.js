const dev = {
  STRIPE_KEY: 'pk_test_zSYvufXGddHIsuW5E4v3r9v0',
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'notes-app-2-api-dev-attachmentsbucket-pqepx8m9ein9'
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://jgkhmp4d95.execute-api.us-east-1.amazonaws.com/dev'
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_WNbD7lygs',
    APP_CLIENT_ID: '4i27mbrbcc5an5j66c0e8hu6pe',
    IDENTITY_POOL_ID: 'us-east-1:e81baf82-90fb-4f10-a90d-54d2b4dfe0ea'
  }
}

const prod = {
  STRIPE_KEY: 'pk_test_zSYvufXGddHIsuW5E4v3r9v0',
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'notes-app-2-api-prod-attachmentsbucket-1b1e7zwzlf8jf'
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://jgkhmp4d95.execute-api.us-east-1.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_JNGTZWCUZ',
    APP_CLIENT_ID: '4gqicdpg8cr6a4rskd2ehjraor',
    IDENTITY_POOL_ID: 'us-east-1:a652050e-994f-4aad-8310-f313f1bd09fc'
  }
}

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
}
