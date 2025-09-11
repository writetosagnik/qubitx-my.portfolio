# 📧 EmailJS Setup Guide for Portfolio Contact Form

## Email Template for EmailJS Dashboard

Copy and paste this HTML template into your EmailJS template editor:

```html
<div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
  
  <!-- Header -->
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
    <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">
      🚀 New Portfolio Contact
    </h1>
    <p style="color: #e8e8ff; margin: 10px 0 0 0; font-size: 14px;">
      Someone wants to collaborate with you!
    </p>
  </div>

  <!-- Content -->
  <div style="padding: 30px; background-color: #ffffff;">
    
    <!-- Introduction -->
    <div style="margin-bottom: 25px; padding: 20px; background-color: #f8f9ff; border-left: 4px solid #667eea; border-radius: 5px;">
      <p style="margin: 0; color: #2c3e50; font-size: 16px; line-height: 1.5;">
        <strong>{{from_name}}</strong> has reached out to you through your portfolio website. 
        Here are the details:
      </p>
    </div>

    <!-- Contact Details -->
    <div style="margin-bottom: 25px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
            <strong style="color: #4a5568; font-size: 14px;">👤 Name:</strong>
          </td>
          <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
            <span style="color: #2d3748; font-size: 16px;">{{from_name}}</span>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
            <strong style="color: #4a5568; font-size: 14px;">📧 Email:</strong>
          </td>
          <td style="padding: 12px 0; border-bottom: 1px solid #e0e0e0;">
            <a href="mailto:{{reply_to}}" style="color: #667eea; font-size: 16px; text-decoration: none;">{{reply_to}}</a>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 0;">
            <strong style="color: #4a5568; font-size: 14px;">⏰ Received:</strong>
          </td>
          <td style="padding: 12px 0;">
            <span style="color: #718096; font-size: 14px;">{{sent_time}}</span>
          </td>
        </tr>
      </table>
    </div>

    <!-- Message -->
    <div style="margin-bottom: 25px;">
      <h3 style="color: #2d3748; font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">
        💬 Message
      </h3>
      <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #38b2ac;">
        <p style="color: #2d3748; font-size: 16px; line-height: 1.6; margin: 0; white-space: pre-wrap;">{{message}}</p>
      </div>
    </div>

    <!-- Call to Action -->
    <div style="text-align: center; margin-top: 30px; padding: 20px; background-color: #edf2f7; border-radius: 8px;">
      <p style="color: #4a5568; margin-bottom: 15px; font-size: 14px;">
        Ready to respond? Click the button below to reply directly:
      </p>
      <a href="mailto:{{reply_to}}?subject=Re: Portfolio Contact from {{from_name}}" 
         style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; padding: 12px 25px; text-decoration: none; border-radius: 25px; font-weight: 600; font-size: 14px; transition: all 0.3s ease;">
        📧 Reply to {{from_name}}
      </a>
    </div>

  </div>

  <!-- Footer -->
  <div style="background-color: #2d3748; padding: 20px; border-radius: 0 0 10px 10px; text-align: center;">
    <p style="color: #a0aec0; margin: 0; font-size: 12px;">
      This message was sent via your portfolio contact form at 
      <strong style="color: #ffffff;">uxgnik.me</strong>
    </p>
    <p style="color: #718096; margin: 5px 0 0 0; font-size: 11px;">
      Portfolio Contact System • Powered by EmailJS
    </p>
  </div>

</div>
```

## Template Variables Used:

- `{{from_name}}` - Visitor's name
- `{{reply_to}}` - Visitor's email address  
- `{{message}}` - Visitor's message
- `{{sent_time}}` - Automatically added timestamp

## Setup Instructions:

1. **EmailJS Dashboard Setup:**
   - Go to https://www.emailjs.com/
   - Create account and verify email
   - Add email service (Gmail, Outlook, etc.)
   - Create new template and paste the HTML above
   - Get your Service ID, Template ID, and Public Key

2. **Environment Variables:**
   - Update the values in `.env.local` with your actual EmailJS keys
   - Never commit `.env.local` to version control

3. **Template Configuration:**
   - Set template name: "Portfolio Contact Form"
   - Set subject: "New Portfolio Contact from {{from_name}}"
   - Save template and note the Template ID

4. **Testing:**
   - Test the template in EmailJS dashboard
   - Send a test email to verify formatting
   - Check that all variables are properly replaced

## Security Features:

✅ Environment variables are client-side safe (NEXT_PUBLIC_*)
✅ No sensitive server-side keys exposed
✅ EmailJS handles rate limiting and spam protection
✅ Form validation prevents empty submissions

## Email Features:

🎨 **Professional Design** - Modern, responsive email template
📱 **Mobile Friendly** - Looks great on all devices  
🔗 **Direct Reply Button** - One-click email response
⏰ **Timestamp** - Automatic message timing
🎯 **Clear Layout** - Easy to read contact information
🔒 **Secure** - No API keys exposed publicly
