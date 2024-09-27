// next.config.js
module.exports = {
    output: 'export',  // This enables static export
    images: {
        unoptimized: true  // Disable image optimization for static export compatibility
    }
};
