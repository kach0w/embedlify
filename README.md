
# <a href="https://embedlify.vercel.app/">embedlify</a>
Generate holiday-themed images for your website

# How it Works
Provide the ?holiday parameter on the /api/og page of the website. 

Available holidays so far are: 
 - Christmas "christmas"
 - Thanksgiving "thanksgiving"
 - New Years "new_years"
 - Memorial Day "memorial"
 - Independence Day "independence"
 - Labor Day "labor"
 - Halloween "Halloween"
 - Valentines "valentines"
 - More are coming

If you don't specify anything for the holiday parameter than depending on if the day falls on the day of the listed holidays, the api will automatically generate the embed. If not it will return nothing allowing for easily managable embeds on your website.

# Usage

Christmas - https://embedlify.vercel.app/api/og?holiday=christmas
<img src="https://embedlify.vercel.app/api/og?holiday=christmas">
Halloween - https://embedlify.vercel.app/api/og?holiday=halloween
<img src="https://embedlify.vercel.app/api/og?holiday=halloween">

