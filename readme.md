# rjapi

A simple REST API using Express JS, built for learning and funs.  
Built through [express-generator](https://expressjs.com/en/starter/generator.html)'s default settings.

&nbsp;

## USAGE AND ENDPOINTS

Unlesss specified, these API endpoints will return JSON objects.

### Random dwarf names

URL Pattern: `/names/dwarf/:gender/:numNames`  
Returns a list of random dwarf names based on the given parameters.  
Examples:

- `/names/dwarf/15` - would return 15 dwarf names
- `/names/dwarf/female/4` - would return 4 female dwarf names
- `/names/dwarf` - would return a long list of mixed-gender names

### Random elf names

URL Pattern: `/names/elf/:gender/:numNames`  
Returns a list of random elf names based on the given parameters.  
Examples:

- `/names/elf/15` - would return 15 elf names
- `/names/elf/female/4` - would return 4 female elf names
- `/names/elf` - would return a long list of mixed-gender names

### Random character profiles

URL Pattern: `/characters`  
Returns a list of character profiles, with each one having:

- name
- race
- gender
- image (URL)

&nbsp;

## DEV RESOURCES

- [PM2](http://pm2.keymetrics.io/docs/usage/quick-start/#cheat-sheet)
- [A Minimal Node.js and Express Server Setup and Deployment](https://dev.to/zrbecker/a-minimal-nodejs-and-express-server-setup-and-deployment-3noe?newly-registered-user=true)
- [Deploying Express.js website to VPS with Nginx, PM2 and Ubuntu 18](https://medium.com/@panzelva/deploying-express-js-website-to-vps-with-nginx-pm2-and-ubuntu-18-04-8c5d32593211)
