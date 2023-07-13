import { createClient } from '@sanity/client';

export default createClient({
      projectId: 'blhis1ah',
      dataset: 'production',
      useCdn: true
    });
  
