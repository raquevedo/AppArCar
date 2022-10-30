import requests,urllib3,json,sys
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

#sys.argv.append('avenida lafuente 600,caba')
session = requests.session()
session.headers = {
    "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
    "Accept-Language":"en,es-ES;q=0.9,es;q=0.8"
}
res = session.get("https://www.google.com.ar/maps/place/"+sys.argv[1],verify=False)
response={'latitude':float(res.text.split("ll=")[1].split("\"")[0].split(",")[0]),'longitude':float(res.text.split("ll=")[1].split("\"")[0].split(",")[1])}

print(response)
sys.stdout.flush()
