import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    images:{
        domains:['api.ashyo.fullstackdev.uz']
    }
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);