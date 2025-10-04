'use client';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { useUser } from '@/firebase';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const ProfileForm = () => {
  const { user } = useUser();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile</CardTitle>
        <CardDescription>
          This is how others will see you on the site.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            defaultValue={user?.displayName || 'Lion Cub'}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" defaultValue={user?.email || ''} disabled />
        </div>
        <Button>Save Changes</Button>
      </CardContent>
    </Card>
  );
};

const MyTrips = () => (
  <Card>
    <CardHeader>
      <CardTitle>My Trips</CardTitle>
      <CardDescription>
        A record of your past and upcoming journeys.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <div className="text-center text-muted-foreground p-8">
        <p>You have no upcoming trips.</p>
        <Button variant="link" className="text-primary">
          Explore experiences
        </Button>
      </div>
    </CardContent>
  </Card>
);

const Settings = () => (
  <Card>
    <CardHeader>
      <CardTitle>Settings</CardTitle>
      <CardDescription>Manage your communication preferences.</CardDescription>
    </CardHeader>
    <CardContent className="space-y-6">
      <div className="flex items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <Label className="text-base">Newsletter</Label>
          <p className="text-sm text-muted-foreground">
            Receive updates on new experiences and articles.
          </p>
        </div>
        <Switch defaultChecked />
      </div>
      <div className="flex items-center justify-between rounded-lg border p-4">
        <div className="space-y-0.5">
          <Label className="text-base">Trip Reminders</Label>
          <p className="text-sm text-muted-foreground">
            Get reminders and updates about your booked trips.
          </p>
        </div>
        <Switch defaultChecked />
      </div>
    </CardContent>
  </Card>
);

export default function AccountPage() {
  const heroImage = PlaceHolderImages.find(
    (img) => img.id === 'account-hero'
  );

  return (
    <div>
      <div className="relative h-64 bg-secondary">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover brightness-50"
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl font-bold font-headline">My Account</h1>
            <p className="text-lg text-slate-200 mt-2">
              Manage your profile and travel preferences.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 md:py-12 -mt-24">
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 bg-background/80 backdrop-blur-sm">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="trips">My Trips</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <div className="mt-8 max-w-3xl mx-auto">
            <TabsContent value="profile">
              <ProfileForm />
            </TabsContent>
            <TabsContent value="trips">
              <MyTrips />
            </TabsContent>
            <TabsContent value="settings">
              <Settings />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
