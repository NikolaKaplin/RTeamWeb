<script lang="ts">
	import {
		AlertDialogTrigger,
		AlertDialogContent,
		AlertDialogHeader,
		AlertDialogTitle,
		AlertDialogDescription,
		AlertDialogFooter,
		AlertDialogCancel,
		AlertDialogAction,
		AlertDialog
	} from '$lib/components/ui/alert-dialog';
	import AvatarImage from '$lib/components/ui/avatar/avatar-image.svelte';
	import Avatar from '$lib/components/ui/avatar/avatar.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import { LogOut, AlertTriangle, X, DoorOpen } from 'lucide-svelte';
	import { getContext } from 'svelte';
	import type { ContextUser } from '../../../../../routes/dashboard/+layout.svelte';
	const userContext = getContext<ContextUser>('user-context');
	const user = $derived(userContext);
	let isLogoutDialogOpen = $state(false);
	const handleLogoutDialogClose = () => {
		isLogoutDialogOpen = false;
	};
	const handleLogout = () => {
		isLogoutDialogOpen = true;
	};
</script>

<div class="flex items-center justify-between">
	<a href="/dashboard/profile" class="group flex items-center space-x-3">
		<Avatar
			class="h-10 w-10 rounded-full ring-2 ring-indigo-400 transition-all duration-300 group-hover:ring-indigo-300"
		>
			<AvatarImage
				class="rounded-full"
				src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7ck1OOLv5ru6fpvKCUE3JEUmwiA5lCNDGwg&s'}
				alt={'User avatar'}
			/>
		</Avatar>
		<span
			class="text-sm font-medium text-gray-300 transition-colors duration-300 group-hover:text-white"
		>
			{user.username}
		</span>
	</a>
	<AlertDialog open={isLogoutDialogOpen} onOpenChange={() => isLogoutDialogOpen == false}>
		<AlertDialogTrigger asChild>
			<Button
				variant="ghost"
				size="icon"
				onclick={handleLogout}
				class="text-indigo-400 hover:bg-transparent hover:text-indigo-400"
			>
				<LogOut class="h-5 w-5" />
			</Button>
		</AlertDialogTrigger>
		<AlertDialogContent class="border-gray-700 bg-gray-800">
			<AlertDialogHeader>
				<AlertDialogTitle class="flex items-center gap-2 text-green-500">
					<AlertTriangle class="h-5 w-5" />
					Are you sure you want to log out?
				</AlertDialogTitle>
				<AlertDialogDescription class="text-gray-400">
					This action will end your current development session.
				</AlertDialogDescription>
			</AlertDialogHeader>
			<AlertDialogFooter>
				<AlertDialogCancel
					onclick={handleLogoutDialogClose}
					class="border-gray-600 bg-gray-700 text-green-500 hover:bg-gray-600 hover:text-green-400"
				>
					<X class="mr-2 h-4 w-4" />
					Cancel
				</AlertDialogCancel>
				<AlertDialogAction
					onclick={handleLogoutDialogClose}
					class="bg-green-600 text-gray-100 hover:bg-green-700"
				>
					<form method="post" action="/dashboard/?/logout">
						<button class="flex">
							<DoorOpen class="mr-2 h-4 w-4" />
							Log out
						</button>
					</form>
				</AlertDialogAction>
			</AlertDialogFooter>
		</AlertDialogContent>
	</AlertDialog>
</div>
