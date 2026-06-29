const urls = [
"https://images.unsplash.com/photo-1600164318047-9f7a55ed2e39?q=80&w=2000&auto=format&fit=crop",
"https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop",
"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2000&auto=format&fit=crop",
"https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop",
"https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop",
"https://images.unsplash.com/photo-1598256989800-fea5c5ce870b?q=80&w=800&auto=format&fit=crop",
"https://images.unsplash.com/photo-1574482620811-1a0e10b10fa0?q=80&w=800&auto=format&fit=crop",
"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1590650046871-92c887180603?q=80&w=1200&auto=format&fit=crop",
"https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
"https://images.unsplash.com/photo-1594824436998-d885a539bc2b?q=80&w=800&auto=format&fit=crop"
];

async function check() {
  for (const url of urls) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      console.log(res.status, url);
    } catch(e) {
      console.log("Error", url);
    }
  }
}

check();
