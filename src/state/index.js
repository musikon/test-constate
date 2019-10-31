import createUseContext from 'constate';

import { useAdmin } from '../hooks/admin';

export const useAdminContext = createUseContext(useAdmin);
