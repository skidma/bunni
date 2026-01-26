// api/code.js
export default function handler(req, res) {
  // Set CORS headers to allow requests from Roblox
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Content-Type', 'text/plain');
  
  // Your Lua code
  const luaCode = `local v0 = loadstring;
local v1 = loadstring([[
	local Env, upvalues = ...
	local new = newproxy(true)
	local mt = getmetatable(new)
	mt.__metatable = new
	mt.__environment = new
	mt.__index = function(t,k) return Env[k] or upvalues[k] end
	mt.__newindex = function(t,k,v)
		--if rawget(upvalues,k) then return rawset(upvalues,k,v) end
		Env[k] = v
	end
return setmetatable({},mt)
]], "");
local v2 = {};
local v3 = {};
v2[3] = "https://raw.githubusercontent.com/violin-suzutsuki/LinoriaLib/main/";
local v5 = loadstring(game:HttpGet(v2[3] .. "Library.lua"))();
local v6 = loadstring(game:HttpGet(v2[3] .. "addons/ThemeManager.lua"))();
local v7 = loadstring(game:HttpGet(v2[3] .. "addons/SaveManager.lua"))();
local v8 = v6.LoadDefault;
v6.LoadDefault = function(...)
	if (v6[248836942] == nil) then
		local v355, v356 = v0([===[
local self = ...;
self:ApplyTheme("Jester");
if (Options and Options.ThemeManager_ThemeList) then
	Options.ThemeManager_ThemeList:SetValue("Jester");
end
]===], "");
		local v357 = {self=self,Options=Options};
		setfenv(v355, v1(getfenv(1), v357));
		v6[248836942] = v355;
	end
	return v6[248836942](...);
end;
v6.DefaultTheme = "Jester";
local v11 = v5:CreateWindow({Title="Bunni v1.0.0",Center=true,AutoShow=true,TabPadding=8,MenuFadeTime=0.2});
local v12 = {ESP=v11:AddTab("ESP"),Aimbot=v11:AddTab("Aimbot"),Player=v11:AddTab("Player"),Experimental=v11:AddTab("Experimental"),Visuals=v11:AddTab("Visuals"),Teleport=v11:AddTab("Teleport"),["UI Settings"]=v11:AddTab("UI")};
local v13 = game:GetService("Players");
local v14 = game:GetService("RunService");
local v15 = game:GetService("UserInputService");
local v16 = game:GetService("TweenService");
local v17 = game:GetService("Lighting");
local v18 = game:GetService("Workspace");
local v19 = game:GetService("ReplicatedStorage");
local v20 = game:GetService("CoreGui");
local v21 = v13.LocalPlayer;
local v22 = v18.CurrentCamera;
local v23 = v15.TouchEnabled;
local v24 = v23 and (v22.ViewportSize.X > 800);
local v25 = {Enabled=false,Boxes=not v23,Tracers=false,Names=false,NoNames=false,Health=true,TeamCheck=true,TeamColor=true,ShowDistance=false,RainbowMode=false,Chams=v23,Hooks=true,Generators=true,Vaults=true,Gates=true,MaxDistance=((v23 and 800) or 1500),ObjectMaxDistance=((v23 and 25) or 45),KillerColor=Color3.fromRGB(255, 23, 23),SurvivorColor=Color3.fromRGB(0, 255, 58),HookColor=Color3.fromRGB(255, 0, 153),GeneratorColor=Color3.fromRGB(255, 252, 76),VaultColor=Color3.fromRGB(100, 255, 100),GateColor=Color3.fromRGB(0, 255, 255),HealthBarColor=Color3.fromRGB(0, 255, 0),Objects={},ChamObjects={},GameObjects={},PlayerStates={},ShowCarried=true,ShowHooked=true,ShowActions=true,CarriedColor=Color3.fromRGB(255, 0, 0),HookedColor=Color3.fromRGB(255, 128, 0),ActionColor=Color3.fromRGB(0, 255, 255),Gifts=true,GiftColor=Color3.fromRGB(255, 105, 180),GiftMaxDistance=((v23 and 100) or 200)};
local v26 = {Enabled=false,Color=Color3.fromRGB(255, 255, 255),Size=((v23 and 30) or 50),Thickness=((v23 and 1) or 2),Circle=nil,BoundToAimbot=nil,AutoBind=true};
local v27 = {Enabled=false,Multiplier=2,OriginalWalkSpeed=16,OriginalJumpPower=50,HeartbeatConnection=nil,BypassThread=nil,IsBypassing=false};
local v28 = {Enabled=false,JumpPower=50,JumpCooldown=0.5,LastJumpTime=0,AutoJump=false,AutoJumpInterval=2,AutoJumpThread=nil};
local v29 = {Enabled=false,EnhancedBrightness=false,BrightnessMultiplier=5,InfiniteBattery=false};
local v30 = {Enabled=false,Smoothness=((v23 and 0.5) or 0.3),FOV=((v23 and 50) or 30),Target=nil,AimKeyDown=false};
local v31 = {Enabled=false,Smoothness=((v23 and 0.5) or 0.3),FOV=((v23 and 50) or 30),Target=nil,AimKeyDown=false,TeamCheck=true};
local v32 = {Enabled=false,Range=50,BlindDuration=5,Cooldown=false,AutoBlind=false};
local v33 = {Enabled=false,OriginalBrightness=nil,OriginalAmbient=nil,OriginalOutdoorAmbient=nil,BrightnessValue=2,AmbientValue=Color3.fromRGB(255, 255, 255),OutdoorAmbientValue=Color3.fromRGB(128, 128, 128)};
local v34 = {Enabled=false,XScale=1,YScale=1,RenderConnection=nil};
local v35 = {NoClip=false,Flying=false,FastVault=false,FlySpeed=50,NoClipSpeed=20,AnimationSpeed=1.1,FlyKeyUp=Enum.KeyCode.E,FlyKeyDown=Enum.KeyCode.Q,FlyBoostKey=Enum.KeyCode.LeftShift,VerticalSpeed=25,BoostMultiplier=2,FlyConnection=nil,IsFlying=false,FlightVelocity=Vector3.new(0, 0, 0)};
local v36 = {Enabled=false,PerfectOnly=true,PerfectChance=100,HeartbeatConn=nil,CheckGui=nil,Check=nil,Line=nil,Goal=nil,VirtualInputManager=game:GetService("VirtualInputManager"),Players=game:GetService("Players"),RunService=game:GetService("RunService"),LastVisible=false,LastTeamCheckTime=0};
local v37 = {Enabled=false,FOV=70,OriginalFOV=70,SmoothTransition=true,TransitionSpeed=5,CurrentFOV=70,ToggleKey=Enum.KeyCode.F6,LastToggleTime=0,ToggleCooldown=0.5};
v37.Apply = function(...)
	if (v37[226032292] == nil) then
		local v359, v360 = v0([===[
local self = ...;
if not self.Enabled then
	self.CurrentFOV = self.OriginalFOV;
	Camera.FieldOfView = self.OriginalFOV;
	return;
end
if self.SmoothTransition then
	self.CurrentFOV = self.CurrentFOV + ((self.FOV - self.CurrentFOV) * self.TransitionSpeed * 0.01);
	if (math.abs(self.CurrentFOV - self.FOV) < 0.1) then
		self.CurrentFOV = self.FOV;
	end
else
	self.CurrentFOV = self.FOV;
end
Camera.FieldOfView = self.CurrentFOV;
]===], "");
		local v361 = {self=self,Camera=v22,math=math};
		setfenv(v359, v1(getfenv(1), v361));
		v37[226032292] = v359;
	end
	return v37[226032292](...);
end;
v37.SetFOV = function(...)
	if (v37[1376736382] == nil) then
		local v363, v364 = v0([===[
local self, value = ...;
self.FOV = math.clamp(value, 1, 120);
if not self.Enabled then
	return;
end
self:Apply();
]===], "");
		local v365 = {self=self,math=math,value=value};
		setfenv(v363, v1(getfenv(1), v365));
		v37[1376736382] = v363;
	end
	return v37[1376736382](...);
end;
v37.Toggle = function(...)
	if (v37[10022895] == nil) then
		local v367, v368 = v0([===[
local self, value = ...;
self.Enabled = value;
if value then
	self.OriginalFOV = Camera.FieldOfView;
	self.CurrentFOV = self.OriginalFOV;
else
	Camera.FieldOfView = self.OriginalFOV;
end
]===], "");
		local v369 = {self=self,value=value,Camera=v22};
		setfenv(v367, v1(getfenv(1), v369));
		v37[10022895] = v367;
	end
	return v37[10022895](...);
end;
v37.Cleanup = function(...)
	if (v37[443598070] == nil) then
		local v371, v372 = v0([===[
local self = ...;
if (Camera and self.OriginalFOV) then
	Camera.FieldOfView = self.OriginalFOV;
end
]===], "");
		local v373 = {Camera=v22,self=self};
		setfenv(v371, v1(getfenv(1), v373));
		v37[443598070] = v371;
	end
	return v37[443598070](...);
end;
local v42 = {Enabled=false,ForceUnhook=true,InstantUnhook=true,NoHookCooldown=true,EscapeGrab=true,EscapeCarry=true,BypassHookCount=true,MaxHookCount=999};
v42.HookUnhookSystem = function(...)
	if (v42[114645060] == nil) then
		local v375, v376 = v0([===[
local self = ...;
local character = LocalPlayer.Character;
if not character then
	return;
end
if self.BypassHookCount then
	character:SetAttribute("HookCount", 0);
	character:SetAttribute("MaxHookCount", self.MaxHookCount);
end
local selfUnhookEvent = game:GetService("ReplicatedStorage").Remotes.Carry:WaitForChild("SelfUnHookEvent");
local oldFire = selfUnhookEvent.Fire;
selfUnhookEvent.Fire = function(self, ...)
	if ForceEscape.InstantUnhook then
		character:SetAttribute("IsHooked", false);
		character:SetAttribute("HookCount", 0);
		return true;
	end
	return oldFire(self, ...);
end;
local unhookEvent = game:GetService("ReplicatedStorage").Remotes.Carry:WaitForChild("UnHookEvent");
local oldUnhook = unhookEvent.Fire;
unhookEvent.Fire = function(self, hookPoint, ...)
	if ForceEscape.ForceUnhook then
		if (hookPoint and hookPoint.Parent) then
			luaobf_locals[1320] = hookPoint.Parent:FindFirstChildWhichIsA("Model");
			if luaobf_locals[1320] then
				luaobf_locals[1320]:SetAttribute("IsHooked", false);
				luaobf_locals[1320]:SetAttribute("HookCount", 0);
			end
		end
		return true;
	end
	return oldUnhook(self, hookPoint, ...);
end;
if (self.EscapeGrab or self.EscapeCarry) then
	character:GetAttributeChangedSignal("IsCarried"):Connect(function()
		if (ForceEscape.Enabled and (self.EscapeGrab or self.EscapeCarry)) then
			character:SetAttribute("IsCarried", false);
		end
	end);
	character:GetAttributeChangedSignal("IsGrabbed"):Connect(function()
		if (ForceEscape.Enabled and self.EscapeGrab) then
			character:SetAttribute("IsGrabbed", false);
		end
	end);
end
]===], "");
		local v377 = {character=character,LocalPlayer=v21,self=self,selfUnhookEvent=selfUnhookEvent,game=game,oldFire=oldFire,ForceEscape=v42,unhookEvent=unhookEvent,oldUnhook=oldUnhook,hookPoint=hookPoint,luaobf_locals=v2};
		setfenv(v375, v1(getfenv(1), v377));
		v42[114645060] = v375;
	end
	return v42[114645060](...);
end;
v42.ForceEscapeNow = function(...)
	if (v42[1453483796] == nil) then
		local v379, v380 = v0([===[
local self = ...;
luaobf_locals[1440] = LocalPlayer.Character;
if not luaobf_locals[1440] then
	return;
end
luaobf_locals[1440]:SetAttribute("IsHooked", false);
luaobf_locals[1440]:SetAttribute("IsCarried", false);
luaobf_locals[1440]:SetAttribute("IsGrabbed", false);
luaobf_locals[1440]:SetAttribute("Disabled", false);
luaobf_locals[1440]:SetAttribute("HookCount", 0);
game:GetService("ReplicatedStorage").Remotes.Carry:WaitForChild("SelfUnHookEvent"):FireServer();
game:GetService("ReplicatedStorage").Remotes.Carry:WaitForChild("UnHookEvent"):FireServer(nil);
luaobf_locals[1529] = luaobf_locals[1440]:FindFirstChild("RagdollTrigger");
if luaobf_locals[1529] then
	luaobf_locals[1529].Value = false;
end
Library:Notify("Forced escape!", 2);
]===], "");
		local v381 = {luaobf_locals=v2,LocalPlayer=v21,game=game,Library=v5};
		setfenv(v379, v1(getfenv(1), v381));
		v42[1453483796] = v379;
	end
	return v42[1453483796](...);
end;
v42.Toggle = function(...)
	if (v42[855132580] == nil) then
		local v383, v384 = v0([===[
local self, value = ...;
self.Enabled = value;
if value then
	self:HookUnhookSystem();
	game:GetService("RunService").Heartbeat:Connect(function()
		if not self.Enabled then
			return;
		end
		luaobf_locals[1607] = LocalPlayer.Character;
		if not luaobf_locals[1607] then
			return;
		end
		if (self.ForceUnhook and luaobf_locals[1607]:GetAttribute("IsHooked")) then
			self:ForceEscapeNow();
		end
		if (self.EscapeCarry and luaobf_locals[1607]:GetAttribute("IsCarried")) then
			luaobf_locals[1607]:SetAttribute("IsCarried", false);
		end
	end);
	Library:Notify("Force Escape: ON", 3);
else
	Library:Notify("Force Escape: OFF", 3);
end
]===], "");
		local v385 = {self=self,value=value,game=game,luaobf_locals=v2,LocalPlayer=v21,Library=v5};
		setfenv(v383, v1(getfenv(1), v385));
		v42[855132580] = v383;
	end
	return v42[855132580](...);
end;
local v46 = {GeneratorESP=false,HookESP=false,KillerESP=false,PlayerESP=false,TeleportToRandomGenerator=false,TeleportToRandomHook=false,TeleportToRandomPlayer=false,Heal=false,Speed50=false,AnimSpeed2x=false,ShiftLock=false,NoHitbox=false,SmartHitbox=false,AntiStun=false,GetOffSling=false,FastCooldown=false,NoShadow=false,MorningTime=false,AfternoonTime=false,NoFog=false,InvisibleMap=false,Highlights={},SmartProxies={},NoclipConnection=nil,AntiDamageEnabled=false,LastHealth=nil,AntiDamageConnection=nil,AntiDamageDistance=40,IsDev=(v14:IsStudio() or ((game.CreatorType == Enum.CreatorType.User) and (game.CreatorId == v21.UserId))),LastTeleportTime=0,TeleportCooldown=1,TweenService=game:GetService("TweenService"),KillerNames={abysswalker=true,hidden=true,jason=true,jeff=true,masked=true,veil=true,myers=true},GeneratorNames={generator=true,generator_old=true,gene=true},GeneratorPrefix="ge",HookNames={hookpoint=true,hook=true,hookmeat=true},HookPrefix="ho"};
v46.CollectGenerators = function(...)
	if (v46[707782875] == nil) then
		local v387, v388 = v0([===[
local self = ...;
luaobf_locals[1864] = {};
for _, obj in ipairs(Workspace:GetDescendants()) do
	if (obj:IsA("BasePart") or obj:IsA("MeshPart") or obj:IsA("Model")) then
		luaobf_locals[1900] = string.lower(obj.Name);
		if (self.GeneratorNames[luaobf_locals[1900]] or (string.sub(luaobf_locals[1900], 1, #self.GeneratorPrefix) == self.GeneratorPrefix)) then
			luaobf_locals[1937] = self:FindRootForDesc(obj) or obj;
			if (luaobf_locals[1937] and luaobf_locals[1937].Parent) then
				table.insert(luaobf_locals[1864], luaobf_locals[1937]);
			end
		end
	end
end
return luaobf_locals[1864];
]===], "");
		local v389 = {luaobf_locals=v2,_=_,obj=obj,ipairs=ipairs,Workspace=v18,string=string,self=self,table=table};
		setfenv(v387, v1(getfenv(1), v389));
		v46[707782875] = v387;
	end
	return v46[707782875](...);
end;
v46.CollectHooks = function(...)
	if (v46[2096224182] == nil) then
		local v391, v392 = v0([===[
local self = ...;
luaobf_locals[1972] = {};
for _, obj in ipairs(Workspace:GetDescendants()) do
	if (obj:IsA("BasePart") or obj:IsA("MeshPart") or obj:IsA("Model")) then
		luaobf_locals[2008] = string.lower(obj.Name);
		if (self.HookNames[luaobf_locals[2008]] or (string.sub(luaobf_locals[2008], 1, #self.HookPrefix) == self.HookPrefix)) then
			luaobf_locals[2045] = self:FindRootForDesc(obj) or obj;
			if (luaobf_locals[2045] and luaobf_locals[2045].Parent) then
				table.insert(luaobf_locals[1972], luaobf_locals[2045]);
			end
		end
	end
end
return luaobf_locals[1972];
]===], "");
		local v393 = {luaobf_locals=v2,_=_,obj=obj,ipairs=ipairs,Workspace=v18,string=string,self=self,table=table};
		setfenv(v391, v1(getfenv(1), v393));
		v46[2096224182] = v391;
	end
	return v46[2096224182](...);
end;
v46.FindRootForDesc = function(...)
	if (v46[1721569861] == nil) then
		local v395, v396 = v0([===[
local self, desc = ...;
if not desc then
	return nil;
end
if (desc:IsA("BasePart") or desc:IsA("MeshPart")) then
	return desc;
end
if desc:IsA("Model") then
	return desc.PrimaryPart or desc:FindFirstChildWhichIsA("BasePart") or desc:FindFirstChildWhichIsA("MeshPart");
end
return nil;
]===], "");
		local v397 = {desc=desc};
		setfenv(v395, v1(getfenv(1), v397));
		v46[1721569861] = v395;
	end
	return v46[1721569861](...);
end;
v46.CreateHighlight = function(...)
	if (v46[628485123] == nil) then
		local v399, v400 = v0([===[
local self, target, color = ...;
if (not target or not target.Parent) then
	return nil;
end
luaobf_locals[2155] = target:FindFirstChildOfClass("Highlight");
if luaobf_locals[2155] then
	luaobf_locals[2155].FillColor = color;
	luaobf_locals[2155].OutlineColor = Color3.fromRGB(255, 255, 255);
	return luaobf_locals[2155];
end
h = Instance.new("Highlight");
h.FillColor = color;
h.OutlineColor = Color3.fromRGB(255, 255, 255);
h.Parent = target;
return h;
]===], "");
		local v401 = {target=target,luaobf_locals=v2,color=color,Color3=Color3,h=h,Instance=Instance};
		setfenv(v399, v1(getfenv(1), v401));
		v46[628485123] = v399;
	end
	return v46[628485123](...);
end;
v46.SafeTeleportTo = function(...)
	if (v46[1034384745] == nil) then
		local v403, v404 = v0([===[
local self, part = ...;
luaobf_locals[2252] = LocalPlayer.Character;
if (not luaobf_locals[2252] or not part) then
	return;
end
luaobf_locals[2266] = luaobf_locals[2252]:FindFirstChild("HumanoidRootPart");
if not luaobf_locals[2266] then
	return;
end
luaobf_locals[2266].CFrame = part.CFrame + Vector3.new(0, 3, 0);
]===], "");
		local v405 = {luaobf_locals=v2,LocalPlayer=v21,part=part,Vector3=Vector3};
		setfenv(v403, v1(getfenv(1), v405));
		v46[1034384745] = v403;
	end
	return v46[1034384745](...);
end;
v46.ESPGenerators = function(...)
	if (v46[2126172989] == nil) then
		local v407, v408 = v0([===[
local self = ...;
if self.GeneratorESP then
	self:ClearHighlights();
	return;
end
self.GeneratorESP = true;
for _, root in ipairs(self:CollectGenerators()) do
	self.Highlights[root] = self:CreateHighlight(root, Color3.fromRGB(255, 200, 0));
end
]===], "");
		local v409 = {self=self,_=_,root=root,ipairs=ipairs,Color3=Color3};
		setfenv(v407, v1(getfenv(1), v409));
		v46[2126172989] = v407;
	end
	return v46[2126172989](...);
end;
v46.ESPPlayers = function(...)
	if (v46[1646977746] == nil) then
		local v411, v412 = v0([===[
local self = ...;
if self.PlayerESP then
	self:ClearHighlights();
	return;
end
self.PlayerESP = true;
for _, pl in ipairs(Players:GetPlayers()) do
	if ((pl ~= LocalPlayer) and pl.Character) then
		self.Highlights[pl] = self:CreateHighlight(pl.Character, Color3.fromRGB(0, 150, 255));
	end
end
]===], "");
		local v413 = {self=self,_=_,pl=pl,ipairs=ipairs,Players=v13,LocalPlayer=v21,Color3=Color3};
		setfenv(v411, v1(getfenv(1), v413));
		v46[1646977746] = v411;
	end
	return v46[1646977746](...);
end;
v46.ESPKiller = function(...)
	if (v46[1000214407] == nil) then
		local v415, v416 = v0([===[
local self = ...;
if self.KillerESP then
	self:ClearHighlights();
	return;
end
self.KillerESP = true;
for _, pl in ipairs(Players:GetPlayers()) do
	luaobf_locals[2491] = string.lower(pl.Name or "");
	if (pl.Character and (self.KillerNames[luaobf_locals[2491]] or string.find(luaobf_locals[2491], "killer"))) then
		self.Highlights[pl] = self:CreateHighlight(pl.Character, Color3.fromRGB(255, 0, 0));
	end
end
]===], "");
		local v417 = {self=self,_=_,pl=pl,ipairs=ipairs,Players=v13,luaobf_locals=v2,string=string,Color3=Color3};
		setfenv(v415, v1(getfenv(1), v417));
		v46[1000214407] = v415;
	end
	return v46[1000214407](...);
end;
v46.ESPHook = function(...)
	if (v46[1275389954] == nil) then
		local v419, v420 = v0([===[
local self = ...;
if self.HookESP then
	self:ClearHighlights();
	return;
end
self.HookESP = true;
for _, hook in ipairs(self:CollectHooks()) do
	self.Highlights[hook] = self:CreateHighlight(hook, Color3.fromRGB(255, 255, 0));
end
]===], "");
		local v421 = {self=self,_=_,hook=hook,ipairs=ipairs,Color3=Color3};
		setfenv(v419, v1(getfenv(1), v421));
		v46[1275389954] = v419;
	end
	return v46[1275389954](...);
end;
v46.TeleportToRandomGenerator = function(...)
	if (v46[2079252276] == nil) then
		local v423, v424 = v0([===[
local self = ...;
luaobf_locals[2631] = self:CollectGenerators();
if (#luaobf_locals[2631] > 0) then
	self:SafeTeleportTo(luaobf_locals[2631][math.random(1, #luaobf_locals[2631])]);
end
]===], "");
		local v425 = {luaobf_locals=v2,self=self,math=math};
		setfenv(v423, v1(getfenv(1), v425));
		v46[2079252276] = v423;
	end
	return v46[2079252276](...);
end;
v46.TeleportToRandomHook = function(...)
	if (v46[1041406990] == nil) then
		local v427, v428 = v0([===[
local self = ...;
luaobf_locals[2667] = self:CollectHooks();
if (#luaobf_locals[2667] > 0) then
	self:SafeTeleportTo(luaobf_locals[2667][math.random(1, #luaobf_locals[2667])]);
end
]===], "");
		local v429 = {luaobf_locals=v2,self=self,math=math};
		setfenv(v427, v1(getfenv(1), v429));
		v46[1041406990] = v427;
	end
	return v46[1041406990](...);
end;
v46.TeleportToRandomPlayer = function(...)
	if (v46[737022216] == nil) then
		local v431, v432 = v0([===[
local self = ...;
luaobf_locals[2703] = {};
for _, pl in ipairs(Players:GetPlayers()) do
	if ((pl ~= LocalPlayer) and pl.Character and pl.Character:FindFirstChild("HumanoidRootPart")) then
		table.insert(luaobf_locals[2703], pl);
	end
end
if (#luaobf_locals[2703] > 0) then
	luaobf_locals[2750] = luaobf_locals[2703][math.random(1, #luaobf_locals[2703])];
	luaobf_locals[2762] = luaobf_locals[2750].Character:FindFirstChild("HumanoidRootPart");
	if luaobf_locals[2762] then
		self:SafeTeleportTo(luaobf_locals[2762]);
	end
end
]===], "");
		local v433 = {luaobf_locals=v2,_=_,pl=pl,ipairs=ipairs,Players=v13,LocalPlayer=v21,table=table,math=math,self=self};
		setfenv(v431, v1(getfenv(1), v433));
		v46[737022216] = v431;
	end
	return v46[737022216](...);
end;
v46.Heal = function(...)
	if (v46[1121991318] == nil) then
		local v435, v436 = v0([===[
local self = ...;
luaobf_locals[2790] = LocalPlayer.Character and LocalPlayer.Character:FindFirstChildOfClass("Humanoid");
if luaobf_locals[2790] then
	luaobf_locals[2790].Health = luaobf_locals[2790].MaxHealth;
end
]===], "");
		local v437 = {luaobf_locals=v2,LocalPlayer=v21};
		setfenv(v435, v1(getfenv(1), v437));
		v46[1121991318] = v435;
	end
	return v46[1121991318](...);
end;
v46.Speed50 = function(...)
	if (v46[2126967090] == nil) then
		local v439, v440 = v0([===[
local self = ...;
luaobf_locals[2830] = LocalPlayer.Character and LocalPlayer.Character:FindFirstChildOfClass("Humanoid");
if luaobf_locals[2830] then
	luaobf_locals[2830].WalkSpeed = 50;
end
]===], "");
		local v441 = {luaobf_locals=v2,LocalPlayer=v21};
		setfenv(v439, v1(getfenv(1), v441));
		v46[2126967090] = v439;
	end
	return v46[2126967090](...);
end;
v46.AnimSpeed2x = function(...)
	if (v46[231208428] == nil) then
		local v443, v444 = v0([===[
local self = ...;
luaobf_locals[2867] = LocalPlayer.Character and LocalPlayer.Character:FindFirstChildOfClass("Humanoid");
if (luaobf_locals[2867] and luaobf_locals[2867]:FindFirstChild("Animator")) then
	for _, track in ipairs(luaobf_locals[2867].Animator:GetPlayingAnimationTracks()) do
		track:AdjustSpeed(2);
	end
end
]===], "");
		local v445 = {luaobf_locals=v2,LocalPlayer=v21,_=_,track=track,ipairs=ipairs};
		setfenv(v443, v1(getfenv(1), v445));
		v46[231208428] = v443;
	end
	return v46[231208428](...);
end;
v46.ShiftLock = function(...)
	if (v46[1840584809] == nil) then
		local v447, v448 = v0([===[
local self = ...;
UserInputService.MouseBehavior = Enum.MouseBehavior.LockCenter;
UserInputService.MouseIconEnabled = false;
local conn = RunService.RenderStepped:Connect(function()
	luaobf_locals[2959] = LocalPlayer.Character and LocalPlayer.Character:FindFirstChild("HumanoidRootPart");
	if (luaobf_locals[2959] and Camera) then
		luaobf_locals[2980] = Vector3.new(Camera.CFrame.LookVector.X, 0, Camera.CFrame.LookVector.Z);
		if (luaobf_locals[2980].Magnitude > 0.001) then
			luaobf_locals[2959].CFrame = CFrame.new(luaobf_locals[2959].Position, luaobf_locals[2959].Position + luaobf_locals[2980]);
		end
	end
end);
task.delay(8, function()
	if (conn and conn.Connected) then
		conn:Disconnect();
	end
	UserInputService.MouseBehavior = Enum.MouseBehavior.Default;
	UserInputService.MouseIconEnabled = true;
end);
]===], "");
		local v449 = {UserInputService=v15,Enum=Enum,conn=conn,RunService=v14,luaobf_locals=v2,LocalPlayer=v21,Camera=v22,Vector3=Vector3,CFrame=CFrame,task=task};
		setfenv(v447, v1(getfenv(1), v449));
		v46[1840584809] = v447;
	end
	return v46[1840584809](...);
end;
v46.NoHitbox = function(...)
	if (v46[2085653348] == nil) then
		local v451, v452 = v0([===[
local self = ...;
luaobf_locals[3095] = LocalPlayer.Character;
if not luaobf_locals[3095] then
	return;
end
for _, part in ipairs(luaobf_locals[3095]:GetDescendants()) do
	if part:IsA("BasePart") then
		part.CanTouch = false;
	end
end
]===], "");
		local v453 = {luaobf_locals=v2,LocalPlayer=v21,_=_,part=part,ipairs=ipairs};
		setfenv(v451, v1(getfenv(1), v453));
		v46[2085653348] = v451;
	end
	return v46[2085653348](...);
end;
v46.SmartHitbox = function(...)
	if (v46[690272308] == nil) then
		local v455, v456 = v0([===[
local self = ...;
for _, pl in ipairs(Players:GetPlayers()) do
	luaobf_locals[3154] = string.lower(pl.Name or "");
	if ((pl ~= LocalPlayer) and pl.Character and (self.KillerNames[luaobf_locals[3154]] or string.find(luaobf_locals[3154], "killer"))) then
		luaobf_locals[3192] = pl.Character:FindFirstChild("HumanoidRootPart");
		if (luaobf_locals[3192] and not self.SmartProxies[pl]) then
			luaobf_locals[3214] = Instance.new("Part");
			luaobf_locals[3214].Name = "SmartHitboxProxy";
			luaobf_locals[3214].Size = Vector3.new(3, 3, 3);
			luaobf_locals[3214].Transparency = 1;
			luaobf_locals[3214].CanCollide = false;
			luaobf_locals[3214].Anchored = false;
			luaobf_locals[3214].Massless = true;
			luaobf_locals[3214].CFrame = luaobf_locals[3192].CFrame;
			luaobf_locals[3214].Parent = Workspace;
			luaobf_locals[3312] = Instance.new("WeldConstraint");
			luaobf_locals[3312].Part0 = luaobf_locals[3214];
			luaobf_locals[3312].Part1 = luaobf_locals[3192];
			luaobf_locals[3312].Parent = luaobf_locals[3214];
			self.SmartProxies[pl] = luaobf_locals[3214];
		end
	end
end
]===], "");
		local v457 = {_=_,pl=pl,ipairs=ipairs,Players=v13,luaobf_locals=v2,string=string,LocalPlayer=v21,self=self,Instance=Instance,Vector3=Vector3,Workspace=v18};
		setfenv(v455, v1(getfenv(1), v457));
		v46[690272308] = v455;
	end
	return v46[690272308](...);
end;
v46.AntiStun = function(...)
	if (v46[1817443464] == nil) then
		local v459, v460 = v0([===[
local self = ...;
local hum = LocalPlayer.Character and LocalPlayer.Character:FindFirstChildOfClass("Humanoid");
if not hum then
	return;
end
local conn;
conn = hum.StateChanged:Connect(function(_, new)
	if ((new == Enum.HumanoidStateType.PlatformStanding) or (new == Enum.HumanoidStateType.Physics)) then
		hum.Sit = false;
		hum.PlatformStand = false;
		hum:ChangeState(Enum.HumanoidStateType.Running);
	end
end);
task.delay(5, function()
	if (conn and conn.Connected) then
		conn:Disconnect();
	end
end);
]===], "");
		local v461 = {hum=hum,LocalPlayer=v21,conn=conn,_=_,new=new,Enum=Enum,task=task};
		setfenv(v459, v1(getfenv(1), v461));
		v46[1817443464] = v459;
	end
	return v46[1817443464](...);
end;
v46.ToggleNoclip = function(...)
	if (v46[1025227029] == nil) then
		local v463, v464 = v0([===[
local self = ...;
if self.NoclipConnection then
	self.NoclipConnection:Disconnect();
	self.NoclipConnection = nil;
	return;
end
self.NoclipConnection = RunService.Stepped:Connect(function()
	if LocalPlayer.Character then
		for _, part in ipairs(LocalPlayer.Character:GetDescendants()) do
			if part:IsA("BasePart") then
				part.CanCollide = false;
			end
		end
	end
end);
]===], "");
		local v465 = {self=self,RunService=v14,LocalPlayer=v21,_=_,part=part,ipairs=ipairs};
		setfenv(v463, v1(getfenv(1), v465));
		v46[1025227029] = v463;
	end
	return v46[1025227029](...);
end;
v46.ToggleAntiDamage = function(...)
	if (v46[1051034208] == nil) then
		local v467, v468 = v0([===[
local self = ...;
self.AntiDamageEnabled = not self.AntiDamageEnabled;
if (self.AntiDamageEnabled and not self.AntiDamageConnection) then
	luaobf_locals[3608] = LocalPlayer.Character and LocalPlayer.Character:FindFirstChildOfClass("Humanoid");
	if luaobf_locals[3608] then
		self.LastHealth = luaobf_locals[3608].Health;
		print("Initial health:", self.LastHealth);
	end
	self.AntiDamageConnection = RunService.Heartbeat:Connect(function()
		luaobf_locals[3666] = LocalPlayer.Character;
		if not luaobf_locals[3666] then
			self.LastHealth = nil;
			return;
		end
		luaobf_locals[3687] = luaobf_locals[3666]:FindFirstChildOfClass("Humanoid");
		if not luaobf_locals[3687] then
			self.LastHealth = nil;
			return;
		end
		if (self.LastHealth == nil) then
			self.LastHealth = luaobf_locals[3687].Health;
			return;
		end
		if (luaobf_locals[3687].Health < self.LastHealth) then
			print("Damage detected! Health dropped from", self.LastHealth, "to", luaobf_locals[3687].Health);
			luaobf_locals[3755] = tick();
			if ((luaobf_locals[3755] - self.LastTeleportTime) < self.TeleportCooldown) then
				print("Teleport on cooldown, skipping...");
				self.LastHealth = luaobf_locals[3687].Health;
				return;
			end
			self.LastTeleportTime = luaobf_locals[3755];
			luaobf_locals[3799] = luaobf_locals[3666]:FindFirstChild("HumanoidRootPart");
			if not luaobf_locals[3799] then
				self.LastHealth = luaobf_locals[3687].Health;
				return;
			end
			print("Attempting to teleport away from damage...");
			if self.IsDev then
				self:PerformAntiDamageTeleport(luaobf_locals[3799]);
			else
				self:ShowEscapeMarker(luaobf_locals[3799]);
			end
		end
		self.LastHealth = luaobf_locals[3687].Health;
	end);
else
	if self.AntiDamageConnection then
		self.AntiDamageConnection:Disconnect();
		self.AntiDamageConnection = nil;
	end
	self.AntiDamageEnabled = false;
	self.LastHealth = nil;
end
]===], "");
		local v469 = {self=self,luaobf_locals=v2,LocalPlayer=v21,print=print,RunService=v14,tick=tick};
		setfenv(v467, v1(getfenv(1), v469));
		v46[1051034208] = v467;
	end
	return v46[1051034208](...);
end;
v46.PerformAntiDamageTeleport = function(...)
	if (v46[1362065917] == nil) then
		local v471, v472 = v0([===[
local self, hrp = ...;
luaobf_locals[3914], luaobf_locals[3915] = nil, math.huge;
for _, pl in ipairs(Players:GetPlayers()) do
	if ((pl ~= LocalPlayer) and pl.Character and pl.Character:FindFirstChild("HumanoidRootPart")) then
		luaobf_locals[3953] = string.lower(pl.Name or "");
		if (self.KillerNames[luaobf_locals[3953]] or string.find(luaobf_locals[3953], "killer")) then
			luaobf_locals[3982] = pl.Character:FindFirstChild("HumanoidRootPart");
			if luaobf_locals[3982] then
				luaobf_locals[3996] = (luaobf_locals[3982].Position - hrp.Position).Magnitude;
				if (luaobf_locals[3996] < luaobf_locals[3915]) then
					luaobf_locals[3915] = luaobf_locals[3996];
					luaobf_locals[3914] = luaobf_locals[3982];
				end
			end
		end
	end
end
luaobf_locals[4023] = nil;
if (luaobf_locals[3914] and (luaobf_locals[3915] < 50)) then
	luaobf_locals[4032] = hrp.Position - luaobf_locals[3914].Position;
	if (luaobf_locals[4032].Magnitude < 1) then
		luaobf_locals[4032] = Vector3.new(math.random(-1, 1), 0, math.random(-1, 1));
	end
	dir = luaobf_locals[4032].Unit;
	luaobf_locals[4023] = CFrame.new(hrp.Position + (dir * self.AntiDamageDistance));
else
	luaobf_locals[4103] = math.random() * 2 * math.pi;
	luaobf_locals[4117] = Vector3.new(math.cos(luaobf_locals[4103]), 0, math.sin(luaobf_locals[4103]));
	luaobf_locals[4023] = CFrame.new(hrp.Position + (luaobf_locals[4117] * self.AntiDamageDistance));
end
if luaobf_locals[4023] then
	hrp.CFrame = luaobf_locals[4023] + Vector3.new(0, 3, 0);
	print("Teleported to:", luaobf_locals[4023].Position);
end
]===], "");
		local v473 = {luaobf_locals=v2,math=math,_=_,pl=pl,ipairs=ipairs,Players=v13,LocalPlayer=v21,string=string,self=self,hrp=hrp,Vector3=Vector3,dir=dir,CFrame=CFrame,print=print};
		setfenv(v471, v1(getfenv(1), v473));
		v46[1362065917] = v471;
	end
	return v46[1362065917](...);
end;
v46.ShowEscapeMarker = function(...)
	if (v46[2091635436] == nil) then
		local v475, v476 = v0([===[
local self, hrp = ...;
luaobf_locals[4194] = Camera.CFrame.LookVector;
luaobf_locals[4203] = hrp.Position - (luaobf_locals[4194].Unit * self.AntiDamageDistance);
local marker = Instance.new("Part");
marker.Name = "AntiDamageEscapeMarker";
marker.Size = Vector3.new(3, 3, 3);
marker.Anchored = true;
marker.CanCollide = false;
marker.Transparency = 0.7;
marker.Material = Enum.Material.Neon;
marker.Color = Color3.fromRGB(255, 170, 0);
marker.CFrame = CFrame.new(luaobf_locals[4203]);
marker.Parent = Workspace;
local light = Instance.new("PointLight");
light.Brightness = 5;
light.Range = 15;
light.Color = Color3.fromRGB(255, 170, 0);
light.Parent = marker;
task.delay(2, function()
	if (marker and marker.Parent) then
		marker:Destroy();
	end
end);
print("Escape marker created at:", luaobf_locals[4203]);
]===], "");
		local v477 = {luaobf_locals=v2,Camera=v22,hrp=hrp,self=self,marker=marker,Instance=Instance,Vector3=Vector3,Enum=Enum,Color3=Color3,CFrame=CFrame,Workspace=v18,light=light,task=task,print=print};
		setfenv(v475, v1(getfenv(1), v477));
		v46[2091635436] = v475;
	end
	return v46[2091635436](...);
end;
v46.NoShadow = function(...)
	if (v46[230124337] == nil) then
		local v479, v480 = v0([===[
local self = ...;
for _, v in ipairs(Lighting:GetDescendants()) do
	if (v:IsA("ShadowMapLight") or v:IsA("SpotLight") or v:IsA("PointLight") or v:IsA("DirectionalLight")) then
		v.Shadows = false;
	end
end
Lighting.GlobalShadows = false;
]===], "");
		local v481 = {_=_,v=v,ipairs=ipairs,Lighting=v17};
		setfenv(v479, v1(getfenv(1), v481));
		v46[230124337] = v479;
	end
	return v46[230124337](...);
end;
v46.SetMorning = function(...)
	if (v46[835285154] == nil) then
		local v483, v484 = v0([===[
local self = ...;
Lighting.ClockTime = 7;
]===], "");
		local v485 = {Lighting=v17};
		setfenv(v483, v1(getfenv(1), v485));
		v46[835285154] = v483;
	end
	return v46[835285154](...);
end;
v46.SetAfternoon = function(...)
	if (v46[228678487] == nil) then
		local v487, v488 = v0([===[
local self = ...;
Lighting.ClockTime = 17;
]===], "");
		local v489 = {Lighting=v17};
		setfenv(v487, v1(getfenv(1), v489));
		v46[228678487] = v487;
	end
	return v46[228678487](...);
end;
v46.ToggleNoFog = function(...)
	if (v46[1300265562] == nil) then
		local v491, v492 = v0([===[
local self = ...;
self.NoFog = not self.NoFog;
if self.NoFog then
	Lighting.FogStart = 0;
	Lighting.FogEnd = 100000;
else
	Lighting.FogStart = 0;
	Lighting.FogEnd = 1000;
end
]===], "");
		local v493 = {self=self,Lighting=v17};
		setfenv(v491, v1(getfenv(1), v493));
		v46[1300265562] = v491;
	end
	return v46[1300265562](...);
end;
v46.ToggleInvisibleMap = function(...)
	if (v46[1035441096] == nil) then
		local v495, v496 = v0([===[
local self = ...;
self.InvisibleMap = not self.InvisibleMap;
if self.InvisibleMap then
	for _, v in ipairs(Workspace:GetDescendants()) do
		if (v:IsA("BasePart") and not v:IsDescendantOf(LocalPlayer.Character)) then
			v.LocalTransparencyModifier = 1;
		end
	end
else
	for _, v in ipairs(Workspace:GetDescendants()) do
		if v:IsA("BasePart") then
			v.LocalTransparencyModifier = 0;
		end
	end
end
]===], "");
		local v497 = {self=self,_=_,v=v,ipairs=ipairs,Workspace=v18,LocalPlayer=v21};
		setfenv(v495, v1(getfenv(1), v497));
		v46[1035441096] = v495;
	end
	return v46[1035441096](...);
end;
v46.FastCooldown = function(...)
	if (v46[1701006356] == nil) then
		local v499, v500 = v0([===[
local self = ...;
for _, plr in ipairs(Players:GetPlayers()) do
	if plr.Character then
		luaobf_locals[4718] = plr.Character:FindFirstChild("Cooldowns");
		if luaobf_locals[4718] then
			for _, v in ipairs(luaobf_locals[4718]:GetChildren()) do
				if v:IsA("NumberValue") then
					v.Value = 0;
				end
			end
		end
	end
end
]===], "");
		local v501 = {_=_,plr=plr,ipairs=ipairs,Players=v13,luaobf_locals=v2,v=v};
		setfenv(v499, v1(getfenv(1), v501));
		v46[1701006356] = v499;
	end
	return v46[1701006356](...);
end;
v46.GetOffSling = function(...)
	if (v46[4201063] == nil) then
		local v503, v504 = v0([===[
local self = ...;
luaobf_locals[4769] = LocalPlayer.Character;
if not luaobf_locals[4769] then
	return;
end
for _, joint in ipairs(luaobf_locals[4769]:GetDescendants()) do
	if (joint:IsA("HingeConstraint") or joint:IsA("RodConstraint")) then
		joint.Enabled = false;
	end
end
luaobf_locals[4816] = luaobf_locals[4769]:FindFirstChildWhichIsA("VehicleSeat", true);
if luaobf_locals[4816] then
	luaobf_locals[4828] = luaobf_locals[4769]:FindFirstChildOfClass("Humanoid");
	if luaobf_locals[4828] then
		luaobf_locals[4828].Sit = false;
	end
end
]===], "");
		local v505 = {luaobf_locals=v2,LocalPlayer=v21,_=_,joint=joint,ipairs=ipairs};
		setfenv(v503, v1(getfenv(1), v505));
		v46[4201063] = v503;
	end
	return v46[4201063](...);
end;
v46.ClearHighlights = function(...)
	if (v46[1077390553] == nil) then
		local v507, v508 = v0([===[
local self = ...;
for k, v in pairs(self.Highlights) do
	if (v and v.Parent) then
		v:Destroy();
	end
end
self.Highlights = {};
self.GeneratorESP = false;
self.HookESP = false;
self.KillerESP = false;
self.PlayerESP = false;
]===], "");
		local v509 = {k=k,v=v,pairs=pairs,self=self};
		setfenv(v507, v1(getfenv(1), v509));
		v46[1077390553] = v507;
	end
	return v46[1077390553](...);
end;
v46.Cleanup = function(...)
	if (v46[1310173533] == nil) then
		local v511, v512 = v0([===[
local self = ...;
self:ClearHighlights();
for _, proxy in pairs(self.SmartProxies) do
	if (proxy and proxy.Parent) then
		proxy:Destroy();
	end
end
self.SmartProxies = {};
if self.NoclipConnection then
	self.NoclipConnection:Disconnect();
	self.NoclipConnection = nil;
end
if self.AntiDamageConnection then
	self.AntiDamageConnection:Disconnect();
	self.AntiDamageConnection = nil;
end
if self.InvisibleMap then
	for _, v in ipairs(Workspace:GetDescendants()) do
		if v:IsA("BasePart") then
			v.LocalTransparencyModifier = 0;
		end
	end
	self.InvisibleMap = false;
end
if self.NoFog then
	Lighting.FogStart = 0;
	Lighting.FogEnd = 1000;
	self.NoFog = false;
end
]===], "");
		local v513 = {self=self,_=_,proxy=proxy,pairs=pairs,v=v,ipairs=ipairs,Workspace=v18,Lighting=v17};
		setfenv(v511, v1(getfenv(1), v513));
		v46[1310173533] = v511;
	end
	return v46[1310173533](...);
end;
v36.FindSkillCheckGUI = function(...)
	if (v36[881069103] == nil) then
		local v515, v516 = v0([===[
local self = ...;
luaobf_locals[5113] = self.Players.LocalPlayer;
if not luaobf_locals[5113] then
	return false;
end
luaobf_locals[5128] = luaobf_locals[5113]:WaitForChild("PlayerGui", 5);
if not luaobf_locals[5128] then
	return false;
end
self.CheckGui = luaobf_locals[5128]:FindFirstChild("SkillCheckPromptGui") or luaobf_locals[5128]:FindFirstChild("SkillCheckGui");
if not self.CheckGui then
	for _, child in pairs(luaobf_locals[5128]:GetDescendants()) do
		if (child.Name:lower():find("skill") and child:IsA("ScreenGui")) then
			self.CheckGui = child;
			break;
		end
	end
end
if not self.CheckGui then
	return false;
end
self.Check = self.CheckGui:FindFirstChild("Check") or self.CheckGui:FindFirstChild("Frame");
if not self.Check then
	return false;
end
self.Line = self.Check:FindFirstChild("Line") or self.Check:FindFirstChild("Needle");
self.Goal = self.Check:FindFirstChild("Goal") or self.Check:FindFirstChild("Target");
return self.Line and self.Goal;
]===], "");
		local v517 = {luaobf_locals=v2,self=self,_=_,child=child,pairs=pairs};
		setfenv(v515, v1(getfenv(1), v517));
		v36[881069103] = v515;
	end
	return v36[881069103](...);
end;
v36.LineInGoal = function(...)
	if (v36[325110554] == nil) then
		local v519, v520 = v0([===[
local self = ...;
if (not self.Line or not self.Goal) then
	return false;
end
luaobf_locals[5351] = self.Line.Rotation % 360;
luaobf_locals[5362] = self.Goal.Rotation % 360;
luaobf_locals[5373] = (luaobf_locals[5362] + 105) % 360;
luaobf_locals[5380] = (luaobf_locals[5362] + 115) % 360;
if (luaobf_locals[5373] > luaobf_locals[5380]) then
	return (luaobf_locals[5351] >= luaobf_locals[5373]) or (luaobf_locals[5351] <= luaobf_locals[5380]);
else
	return (luaobf_locals[5351] >= luaobf_locals[5373]) and (luaobf_locals[5351] <= luaobf_locals[5380]);
end
]===], "");
		local v521 = {self=self,luaobf_locals=v2};
		setfenv(v519, v1(getfenv(1), v521));
		v36[325110554] = v519;
	end
	return v36[325110554](...);
end;
v36.PressSpace = function(...)
	if (v36[585568885] == nil) then
		local v523, v524 = v0([===[
local self = ...;
self.VirtualInputManager:SendKeyEvent(true, Enum.KeyCode.Space, false, game);
task.wait(0.01);
self.VirtualInputManager:SendKeyEvent(false, Enum.KeyCode.Space, false, game);
pcall(function()
	game:GetService("VirtualInputManager"):SendKeyEvent(true, "Space", false, game);
	task.wait(0.01);
	game:GetService("VirtualInputManager"):SendKeyEvent(false, "Space", false, game);
end);
pcall(function()
	game:GetService("UserInputService"):SendKeyEvent(true, "Space", false, nil);
	task.wait(0.01);
	game:GetService("UserInputService"):SendKeyEvent(false, "Space", false, nil);
end);
]===], "");
		local v525 = {self=self,Enum=Enum,game=game,task=task,pcall=pcall};
		setfenv(v523, v1(getfenv(1), v525));
		v36[585568885] = v523;
	end
	return v36[585568885](...);
end;
v36.HeartbeatCheck = function(...)
	if (v36[1326437423] == nil) then
		local v527, v528 = v0([===[
local self = ...;
if not self.Enabled then
	return;
end
luaobf_locals[5551] = tick();
if ((luaobf_locals[5551] - self.LastTeamCheckTime) > 5) then
	self.LastTeamCheckTime = luaobf_locals[5551];
end
if (not self.CheckGui or not self.Check or not self.Line or not self.Goal) then
	if not self:FindSkillCheckGUI() then
		return;
	end
end
if (self.Check and self.Check.Visible) then
	if (self.LastVisible ~= true) then
		self.LastVisible = true;
		print("Skill Check GUI Found and Visible!");
	end
	luaobf_locals[5644] = self.Players.LocalPlayer;
	luaobf_locals[5653] = false;
	if luaobf_locals[5644].Team then
		luaobf_locals[5662] = luaobf_locals[5644].Team.Name:lower();
		luaobf_locals[5653] = luaobf_locals[5662]:find("survivor") or luaobf_locals[5662]:find("civil") or luaobf_locals[5662]:find("victim");
	else
		luaobf_locals[5653] = true;
	end
	if luaobf_locals[5653] then
		if self.PerfectOnly then
			if self:LineInGoal() then
				self:PressSpace();
				print("  [+] WOWZA!");
			end
		elseif self:LineInGoal() then
			self:PressSpace();
			print("  [+] Perfect!");
		elseif (math.random(1, 100) <= self.PerfectChance) then
			self:PressSpace();
			print("  [+] WOWZA!");
		end
	end
elseif (self.LastVisible ~= false) then
	self.LastVisible = false;
end
]===], "");
		local v529 = {self=self,luaobf_locals=v2,tick=tick,print=print,math=math};
		setfenv(v527, v1(getfenv(1), v529));
		v36[1326437423] = v527;
	end
	return v36[1326437423](...);
end;
v36.OnCheckVisible = function(...)
	if (v36[1615873788] == nil) then
		local v531, v532 = v0([===[
local self = ...;
if not self.Enabled then
	return;
end
if not self.Check then
	if not self:FindSkillCheckGUI() then
		return;
	end
end
if (self.Check and self.Check.Visible) then
	if self.HeartbeatConn then
		self.HeartbeatConn:Disconnect();
	end
	self.HeartbeatConn = self.RunService.Heartbeat:Connect(function()
		self:HeartbeatCheck();
	end);
	print("  [+] Skill Check Started Monitoring");
elseif self.HeartbeatConn then
	self.HeartbeatConn:Disconnect();
	self.HeartbeatConn = nil;
	print("  [+] Skill Check Stopped Monitoring");
end
]===], "");
		local v533 = {self=self,print=print};
		setfenv(v531, v1(getfenv(1), v533));
		v36[1615873788] = v531;
	end
	return v36[1615873788](...);
end;
v36.Initialize = function(...)
	if (v36[1107813848] == nil) then
		local v535, v536 = v0([===[
local self = ...;
if not self.Enabled then
	return;
end
print("  [+] Preparing Skill Checks");
self:FindSkillCheckGUI();
if self.Check then
	self.Check:GetPropertyChangedSignal("Visible"):Connect(function()
		self:OnCheckVisible();
	end);
	if self.Check.Visible then
		self:OnCheckVisible();
	end
else
	print("  [+] Unable to Detect ALL Skill Checks");
end
task.spawn(function()
	while task.wait(2) do
		if (self.Enabled and (not self.CheckGui or not self.Check)) then
			self:FindSkillCheckGUI();
			if self.Check then
				self.Check:GetPropertyChangedSignal("Visible"):Connect(function()
					self:OnCheckVisible();
				end);
			end
		end
	end
end);
]===], "");
		local v537 = {self=self,print=print,task=task};
		setfenv(v535, v1(getfenv(1), v537));
		v36[1107813848] = v535;
	end
	return v36[1107813848](...);
end;
v35.StartFlying = function(...)
	if (v35[1016747488] == nil) then
		local v539, v540 = v0([===[
local self = ...;
if self.IsFlying then
	return;
end
self.IsFlying = true;
print("Flying enabled!");
luaobf_locals[6063] = LocalPlayer.Character;
if luaobf_locals[6063] then
	luaobf_locals[6072] = luaobf_locals[6063]:FindFirstChildOfClass("Humanoid");
	if luaobf_locals[6072] then
		luaobf_locals[6072].PlatformStand = true;
	end
end
if self.FlyConnection then
	self.FlyConnection:Disconnect();
end
self.FlyConnection = RunService.Heartbeat:Connect(function(deltaTime)
	if (not self.Flying or not self.IsFlying) then
		return;
	end
	luaobf_locals[6141] = LocalPlayer.Character;
	if not luaobf_locals[6141] then
		return;
	end
	luaobf_locals[6152] = luaobf_locals[6141]:FindFirstChild("HumanoidRootPart");
	if not luaobf_locals[6152] then
		return;
	end
	luaobf_locals[6165] = Vector3.new(0, 0, 0);
	if UserInputService:IsKeyDown(Enum.KeyCode.W) then
		luaobf_locals[6165] = luaobf_locals[6165] + Camera.CFrame.LookVector;
	end
	if UserInputService:IsKeyDown(Enum.KeyCode.S) then
		luaobf_locals[6165] = luaobf_locals[6165] - Camera.CFrame.LookVector;
	end
	if UserInputService:IsKeyDown(Enum.KeyCode.A) then
		luaobf_locals[6165] = luaobf_locals[6165] - Camera.CFrame.RightVector;
	end
	if UserInputService:IsKeyDown(Enum.KeyCode.D) then
		luaobf_locals[6165] = luaobf_locals[6165] + Camera.CFrame.RightVector;
	end
	if UserInputService:IsKeyDown(self.FlyKeyUp) then
		luaobf_locals[6165] = luaobf_locals[6165] + Vector3.new(0, 1, 0);
	end
	if UserInputService:IsKeyDown(self.FlyKeyDown) then
		luaobf_locals[6165] = luaobf_locals[6165] - Vector3.new(0, 1, 0);
	end
	if (luaobf_locals[6165].Magnitude > 0) then
		luaobf_locals[6165] = luaobf_locals[6165].Unit;
	end
	luaobf_locals[6342] = self.FlySpeed;
	if UserInputService:IsKeyDown(self.FlyBoostKey) then
		luaobf_locals[6342] = self.FlySpeed * self.BoostMultiplier;
	end
	luaobf_locals[6371] = 1;
	if (UserInputService:IsKeyDown(self.FlyKeyUp) or UserInputService:IsKeyDown(self.FlyKeyDown)) then
		luaobf_locals[6371] = self.VerticalSpeed / self.FlySpeed;
	end
	luaobf_locals[6407] = luaobf_locals[6165] * luaobf_locals[6342];
	velocity = Vector3.new(luaobf_locals[6407].X, luaobf_locals[6407].Y * luaobf_locals[6371], luaobf_locals[6407].Z);
	self.FlightVelocity = self.FlightVelocity:Lerp(velocity, 0.5);
	luaobf_locals[6152].Velocity = self.FlightVelocity;
	luaobf_locals[6152].CFrame = CFrame.new(luaobf_locals[6152].Position, luaobf_locals[6152].Position + Camera.CFrame.LookVector);
end);
Library:Notify("Controls: W/A/S/D to move, E to go up, Q to go down, Shift to boost", 5);
]===], "");
		local v541 = {self=self,print=print,luaobf_locals=v2,LocalPlayer=v21,RunService=v14,deltaTime=deltaTime,Vector3=Vector3,UserInputService=v15,Enum=Enum,Camera=v22,velocity=velocity,CFrame=CFrame,Library=v5};
		setfenv(v539, v1(getfenv(1), v541));
		v35[1016747488] = v539;
	end
	return v35[1016747488](...);
end;
v35.StopFlying = function(...)
	if (v35[770837059] == nil) then
		local v543, v544 = v0([===[
local self = ...;
if not self.IsFlying then
	return;
end
self.IsFlying = false;
luaobf_locals[6529] = LocalPlayer.Character;
if luaobf_locals[6529] then
	luaobf_locals[6538] = luaobf_locals[6529]:FindFirstChildOfClass("Humanoid");
	if luaobf_locals[6538] then
		luaobf_locals[6538].PlatformStand = false;
	end
	luaobf_locals[6559] = luaobf_locals[6529]:FindFirstChild("HumanoidRootPart");
	if luaobf_locals[6559] then
		luaobf_locals[6559].Velocity = Vector3.new(0, 0, 0);
	end
end
if self.FlyConnection then
	self.FlyConnection:Disconnect();
	self.FlyConnection = nil;
end
self.FlightVelocity = Vector3.new(0, 0, 0);
]===], "");
		local v545 = {self=self,luaobf_locals=v2,LocalPlayer=v21,Vector3=Vector3};
		setfenv(v543, v1(getfenv(1), v545));
		v35[770837059] = v543;
	end
	return v35[770837059](...);
end;
v35.ToggleFlying = function(...)
	if (v35[2038982806] == nil) then
		local v547, v548 = v0([===[
local self, value = ...;
self.Flying = value;
if value then
	self:StartFlying();
else
	self:StopFlying();
end
]===], "");
		local v549 = {self=self,value=value};
		setfenv(v547, v1(getfenv(1), v549));
		v35[2038982806] = v547;
	end
	return v35[2038982806](...);
end;
v36.Toggle = function(...)
	if (v36[1410471405] == nil) then
		local v551, v552 = v0([===[
local self, value = ...;
self.Enabled = value;
if value then
	self:Initialize();
elseif self.HeartbeatConn then
	self.HeartbeatConn:Disconnect();
	self.HeartbeatConn = nil;
end
]===], "");
		local v553 = {self=self,value=value};
		setfenv(v551, v1(getfenv(1), v553));
		v36[1410471405] = v551;
	end
	return v36[1410471405](...);
end;
v34.Apply = function(...)
	if (v34[1298925551] == nil) then
		local v555, v556 = v0([===[
local self = ...;
if not self.Enabled then
	if self.RenderConnection then
		self.RenderConnection:Disconnect();
		self.RenderConnection = nil;
	end
	return;
end
if not self.RenderConnection then
	self.RenderConnection = RunService.RenderStepped:Connect(function()
		if not self.Enabled then
			return;
		end
		luaobf_locals[6787] = workspace.CurrentCamera;
		if not luaobf_locals[6787] then
			return;
		end
		luaobf_locals[6798] = luaobf_locals[6787].CFrame;
		if (self.XScale ~= 1) then
			luaobf_locals[6812] = luaobf_locals[6798].LookVector;
			luaobf_locals[6818] = luaobf_locals[6798].RightVector;
			luaobf_locals[6824] = luaobf_locals[6798].UpVector;
			luaobf_locals[6830] = luaobf_locals[6798].Position;
			right = luaobf_locals[6818] * self.XScale;
			luaobf_locals[6787].CFrame = CFrame.fromMatrix(luaobf_locals[6830], right, luaobf_locals[6824], luaobf_locals[6812]);
		end
		if (self.YScale ~= 1) then
			luaobf_locals[6871] = luaobf_locals[6787].CFrame;
			luaobf_locals[6877] = luaobf_locals[6871].LookVector;
			luaobf_locals[6883] = luaobf_locals[6871].RightVector;
			luaobf_locals[6889] = luaobf_locals[6871].UpVector;
			luaobf_locals[6895] = luaobf_locals[6871].Position;
			up = luaobf_locals[6889] * self.YScale;
			luaobf_locals[6787].CFrame = CFrame.fromMatrix(luaobf_locals[6895], luaobf_locals[6883], up, luaobf_locals[6877]);
		end
	end);
end
]===], "");
		local v557 = {self=self,RunService=v14,luaobf_locals=v2,workspace=workspace,right=right,CFrame=CFrame,up=up};
		setfenv(v555, v1(getfenv(1), v557));
		v34[1298925551] = v555;
	end
	return v34[1298925551](...);
end;
v34.SetX = function(...)
	if (v34[905250817] == nil) then
		local v559, v560 = v0([===[
local self, value = ...;
self.XScale = math.clamp(value, 0.5, 2);
if self.Enabled then
	self:Apply();
end
]===], "");
		local v561 = {self=self,math=math,value=value};
		setfenv(v559, v1(getfenv(1), v561));
		v34[905250817] = v559;
	end
	return v34[905250817](...);
end;
v34.SetY = function(...)
	if (v34[1780732480] == nil) then
		local v563, v564 = v0([===[
local self, value = ...;
self.YScale = math.clamp(value, 0.5, 2);
if self.Enabled then
	self:Apply();
end
]===], "");
		local v565 = {self=self,math=math,value=value};
		setfenv(v563, v1(getfenv(1), v565));
		v34[1780732480] = v563;
	end
	return v34[1780732480](...);
end;
v34.Toggle = function(...)
	if (v34[1335958510] == nil) then
		local v567, v568 = v0([===[
local self, value = ...;
self.Enabled = value;
if value then
	self:Apply();
elseif self.RenderConnection then
	self.RenderConnection:Disconnect();
	self.RenderConnection = nil;
end
]===], "");
		local v569 = {self=self,value=value};
		setfenv(v567, v1(getfenv(1), v569));
		v34[1335958510] = v567;
	end
	return v34[1335958510](...);
end;
local v35 = {NoClip=false,Flying=false,FastVault=false,FlySpeed=50,NoClipSpeed=20,AnimationSpeed=1.1};
local v93 = {Enabled=false,Speed=5};
local v94 = {Enabled=false,ParryDistance=15,ParryCooldown=50,LastParryTime=0,CheckInterval=0.1,IsParrying=false};
local v95 = {Enabled=false,DashDistance=5,DashKey=((v23 and Enum.KeyCode.ButtonB) or Enum.KeyCode.Q)};
local v96 = {Enabled=true,HoldKey=Enum.KeyCode.G,IsActive=false,HoldKeyDown=false,MovementThread=nil,SpinSpeed=5,WalkSpeed=25,A_D_Speed=0.08};
local v97 = {Enabled=false,Scale=1.5,OriginalSizes={},ExpandedPlayers={},TargetTeam="Survivor"};
local v98 = {Enabled=false,OriginalTransparency={},OriginalCollision={}};
local v99 = {Enabled=false,Generators=true,Healing=true,DestroyedEvents={}};
local v100 = {Enabled=false,Hue=0,Speed=0.01,RainbowConnection=nil};
local v101 = {Enabled=false,FakeHealth=100,FakeInjured=false,FakeCrouching=false,FakeKnocked=false};
v101.ApplyFakeStates = function(...)
	if (v101[1235866704] == nil) then
		local v571, v572 = v0([===[
local self = ...;
if not self.Enabled then
	return;
end
luaobf_locals[7260] = LocalPlayer.Character;
if not luaobf_locals[7260] then
	return;
end
luaobf_locals[7271] = luaobf_locals[7260]:FindFirstChildOfClass("Humanoid");
if luaobf_locals[7271] then
	if not HealthStateExploits.RealHealth then
		HealthStateExploits.RealHealth = luaobf_locals[7271].Health;
	end
end
if self.FakeInjured then
	luaobf_locals[7260]:SetAttribute("IsInjured", true);
else
	luaobf_locals[7260]:SetAttribute("IsInjured", nil);
end
if self.FakeCrouching then
	luaobf_locals[7260]:SetAttribute("Crouching", true);
else
	luaobf_locals[7260]:SetAttribute("Crouching", nil);
end
if self.FakeKnocked then
	luaobf_locals[7260]:SetAttribute("IsKnocked", true);
else
	luaobf_locals[7260]:SetAttribute("IsKnocked", nil);
end
]===], "");
		local v573 = {self=self,luaobf_locals=v2,LocalPlayer=v21,HealthStateExploits=v101};
		setfenv(v571, v1(getfenv(1), v573));
		v101[1235866704] = v571;
	end
	return v101[1235866704](...);
end;
v101.ToggleFakeInjured = function(...)
	if (v101[2058068484] == nil) then
		local v575, v576 = v0([===[
local self, value = ...;
self.FakeInjured = value;
self:ApplyFakeStates();
]===], "");
		local v577 = {self=self,value=value};
		setfenv(v575, v1(getfenv(1), v577));
		v101[2058068484] = v575;
	end
	return v101[2058068484](...);
end;
v101.ToggleFakeCrouching = function(...)
	if (v101[1258655007] == nil) then
		local v579, v580 = v0([===[
local self, value = ...;
self.FakeCrouching = value;
self:ApplyFakeStates();
]===], "");
		local v581 = {self=self,value=value};
		setfenv(v579, v1(getfenv(1), v581));
		v101[1258655007] = v579;
	end
	return v101[1258655007](...);
end;
local function v105(v149)
	v2[7421] = v149:GetAttribute("platform");
	if v2[7421] then
		return v2[7421];
	end
	if v15.GamepadEnabled then
		return "Console";
	elseif v15.TouchEnabled then
		return "Mobile";
	else
		return "PC";
	end
end
local function v106(v151)
	if v151.Character then
		return v151.Character:GetAttribute("IsCarried") or false;
	end
	return false;
end
local function v107(v152)
	if v152.Character then
		return v152.Character:GetAttribute("IsHooked") or false;
	end
	return false;
end
local function v108(v153)
	if v153.Character then
		v2[7521] = v153.Character:FindFirstChild("HumanoidRootPart");
		if v2[7521] then
			return v2[7521]:HasTag("doing action") or false;
		end
	end
	return false;
end
local function v109(v154)
	if v154.Character then
		v2[7559] = v154.Character:FindFirstChild("CheckInterractable");
		if v2[7559] then
			v2[7573] = {{attr="isVaulting",name="Vaulting"},{attr="isSliding",name="Sliding"},{attr="isDroppingPallet",name="Dropping Pallet"},{attr="isRepairing",name="Repairing"},{attr="isHealing",name="Healing"},{attr="isUnhooking",name="Unhooking"},{attr="isExiting",name="Exiting"},{attr="IsCarried",name="Carried"},{attr="IsHooked",name="Hooked"}};
			for v799, v800 in pairs(v2[7573]) do
				if v2[7559]:GetAttribute(v800.attr) then
					return v800.name;
				end
			end
		end
		if v154.Character:GetAttribute("IsCarried") then
			return "Carried";
		end
		if v154.Character:GetAttribute("IsHooked") then
			return "Hooked";
		end
		if v154.Character:FindFirstChildWhichIsA("Tool") then
			v2[7717] = v154.Character:FindFirstChildWhichIsA("Tool");
			v2[7728] = v2[7717].Name:lower();
			if v2[7728]:find("flashlight") then
				return "Flashlight";
			elseif v2[7728]:find("medkit") then
				return "Healing";
			elseif v2[7728]:find("toolbox") then
				return "Repairing";
			elseif v2[7728]:find("key") then
				return "Unlocking";
			end
		end
	end
	return "None";
end
local function v110(v155)
	if (v155 == v21) then
		return "Survivor";
	end
	if v106(v155) then
		return "Killer";
	end
	if v107(v155) then
		return "Survivor";
	end
	if v155.Team then
		v2[7817] = v155.Team.Name:lower();
		if (string.find(v2[7817], "killer") or string.find(v2[7817], "murder") or string.find(v2[7817], "hunter")) then
			return "Killer";
		elseif (string.find(v2[7817], "survivor") or string.find(v2[7817], "civil") or string.find(v2[7817], "victim")) then
			return "Survivor";
		end
	end
	if v155.Character then
		v2[7891] = {"Knife","Axe","Sword","Weapon","Tool","Hammer","Machete","Chainsaw"};
		v2[7918] = {"Flashlight","Medkit","Toolbox","Key","Map"};
		for v747, v748 in pairs(v2[7891]) do
			if (v155.Character:FindFirstChild(v748) or v155.Character:FindFirstChildWhichIsA("Tool")) then
				v2[7964] = (v155.Character:FindFirstChildWhichIsA("Tool") and v155.Character:FindFirstChildWhichIsA("Tool").Name:lower()) or "";
				if (not string.find(v2[7964], "flashlight") and not string.find(v2[7964], "medkit")) then
					return "Killer";
				end
			end
		end
		for v749, v750 in pairs(v2[7918]) do
			if v155.Character:FindFirstChild(v750) then
				return "Survivor";
			end
		end
		v2[8035] = v155.Character:FindFirstChildOfClass("Humanoid");
		if v2[8035] then
			if (v2[8035].WalkSpeed <= 16) then
				return "Killer";
			elseif (v2[8035].WalkSpeed >= 18) then
				return "Survivor";
			end
		end
	end
	return "Survivor";
end
local function v111(v156)
	if (v21.Character and v21.Character:FindFirstChild("HumanoidRootPart")) then
		return (v21.Character.HumanoidRootPart.Position - v156).Magnitude;
	end
	return math.huge;
end
v25.CreateBox = function(...)
	if (v25[1024163853] == nil) then
		local v589, v590 = v0([===[
local self, Player = ...;
luaobf_locals[8124] = Drawing.new("Square");
luaobf_locals[8124].Visible = false;
luaobf_locals[8124].Thickness = 2;
luaobf_locals[8124].Filled = false;
luaobf_locals[8162] = Drawing.new("Line");
luaobf_locals[8162].Visible = false;
luaobf_locals[8162].Thickness = 1;
luaobf_locals[8190] = Drawing.new("Text");
luaobf_locals[8190].Visible = false;
luaobf_locals[8190].Size = (isMobile and 12) or 14;
luaobf_locals[8190].Center = true;
luaobf_locals[8190].Outline = true;
luaobf_locals[8242] = Drawing.new("Text");
luaobf_locals[8242].Visible = false;
luaobf_locals[8242].Size = (isMobile and 10) or 12;
luaobf_locals[8242].Center = true;
luaobf_locals[8242].Outline = true;
luaobf_locals[8294] = Drawing.new("Square");
luaobf_locals[8294].Visible = false;
luaobf_locals[8294].Filled = true;
luaobf_locals[8294].Thickness = 1;
luaobf_locals[8332] = Drawing.new("Text");
luaobf_locals[8332].Visible = false;
luaobf_locals[8332].Size = (isMobile and 9) or 11;
luaobf_locals[8332].Center = true;
luaobf_locals[8332].Outline = true;
self.Objects[Player] = {Box=luaobf_locals[8124],Tracer=luaobf_locals[8162],Name=luaobf_locals[8190],Distance=luaobf_locals[8242],HealthBar=luaobf_locals[8294],HealthText=luaobf_locals[8332],Player=Player};
]===], "");
		local v591 = {luaobf_locals=v2,Drawing=Drawing,isMobile=v23,self=self,Player=Player};
		setfenv(v589, v1(getfenv(1), v591));
		v25[1024163853] = v589;
	end
	return v25[1024163853](...);
end;
v25.UpdateBox = function(...)
	if (v25[1029324648] == nil) then
		local v593, v594 = v0([===[
local self, Player, Object = ...;
luaobf_locals[8429] = Player.Character;
if (not luaobf_locals[8429] or not luaobf_locals[8429]:FindFirstChild("Humanoid") or not luaobf_locals[8429]:FindFirstChild("HumanoidRootPart")) then
	return false;
end
luaobf_locals[8457] = luaobf_locals[8429].HumanoidRootPart;
luaobf_locals[8463] = getDistanceFromPlayer(luaobf_locals[8457].Position);
if (luaobf_locals[8463] > self.MaxDistance) then
	return false;
end
luaobf_locals[8481], luaobf_locals[8482] = Camera:WorldToViewportPoint(luaobf_locals[8457].Position);
if not luaobf_locals[8482] then
	return false;
end
luaobf_locals[8499] = getPlayerRole(Player);
if (Player == LocalPlayer) then
	luaobf_locals[8499] = "Survivor";
end
luaobf_locals[8513] = isPlayerCarrying(Player);
luaobf_locals[8518] = isPlayerHooked(Player);
luaobf_locals[8523] = isPlayerDoingAction(Player);
luaobf_locals[8528] = getPlayerActionType(Player);
luaobf_locals[8533] = getPlayerPlatform(Player);
self.PlayerStates[Player] = {IsCarrying=luaobf_locals[8513],IsHooked=luaobf_locals[8518],IsDoingAction=luaobf_locals[8523],ActionType=luaobf_locals[8528],Role=luaobf_locals[8499],Platform=luaobf_locals[8533]};
luaobf_locals[8570] = nil;
if (luaobf_locals[8499] == "Killer") then
	luaobf_locals[8570] = self.KillerColor;
else
	luaobf_locals[8570] = self.SurvivorColor;
end
if (luaobf_locals[8513] and self.ShowCarried) then
	luaobf_locals[8570] = self.CarriedColor;
elseif (luaobf_locals[8518] and self.ShowHooked) then
	luaobf_locals[8570] = self.HookedColor;
elseif (luaobf_locals[8523] and self.ShowActions) then
	luaobf_locals[8570] = self.ActionColor;
end
luaobf_locals[8639] = luaobf_locals[8429]:FindFirstChild("Head");
luaobf_locals[8647] = (luaobf_locals[8639] and (luaobf_locals[8639].Position - luaobf_locals[8457].Position).Y) or 3;
luaobf_locals[8665] = -3;
luaobf_locals[8669] = luaobf_locals[8457].Position + Vector3.new(0, luaobf_locals[8647], 0);
luaobf_locals[8684] = luaobf_locals[8457].Position + Vector3.new(0, luaobf_locals[8665], 0);
luaobf_locals[8699], luaobf_locals[8700] = Camera:WorldToViewportPoint(luaobf_locals[8669]);
luaobf_locals[8708], luaobf_locals[8709] = Camera:WorldToViewportPoint(luaobf_locals[8684]);
if (not luaobf_locals[8700] or not luaobf_locals[8709]) then
	return false;
end
luaobf_locals[8726] = math.abs(luaobf_locals[8699].Y - luaobf_locals[8708].Y);
luaobf_locals[8742] = luaobf_locals[8726] * 0.6;
if (luaobf_locals[8726] < 10) then
	luaobf_locals[8726] = 20;
end
if (luaobf_locals[8742] < 8) then
	luaobf_locals[8742] = 12;
end
Object.Box.Size = Vector2.new(luaobf_locals[8742], luaobf_locals[8726]);
Object.Box.Position = Vector2.new(luaobf_locals[8481].X - (luaobf_locals[8742] / 2), luaobf_locals[8481].Y - (luaobf_locals[8726] / 2));
Object.Box.Color = luaobf_locals[8570];
Object.Box.Visible = self.Boxes and not self.Chams;
if self.Tracers then
	Object.Tracer.From = Vector2.new(Camera.ViewportSize.X / 2, Camera.ViewportSize.Y);
	Object.Tracer.To = Vector2.new(luaobf_locals[8481].X, luaobf_locals[8481].Y + (luaobf_locals[8726] / 2));
	Object.Tracer.Color = luaobf_locals[8570];
	Object.Tracer.Visible = true and not self.Chams;
else
	Object.Tracer.Visible = false;
end
if (self.Names and not self.NoNames) then
	luaobf_locals[9005] = Player.Name .. " (" .. luaobf_locals[8499] .. ")";
	if (luaobf_locals[8533] ~= "PC") then
		luaobf_locals[9005] = luaobf_locals[9005] .. " [" .. luaobf_locals[8533] .. "]";
	end
	luaobf_locals[9032] = "";
	if luaobf_locals[8513] then
		luaobf_locals[9032] = "CARRIED";
	elseif luaobf_locals[8518] then
		luaobf_locals[9032] = "HOOKED";
	elseif (luaobf_locals[8523] and (luaobf_locals[8528] ~= "None")) then
		luaobf_locals[9032] = luaobf_locals[8528]:upper();
	end
	if (luaobf_locals[9032] ~= "") then
		luaobf_locals[9005] = luaobf_locals[9005] .. " [" .. luaobf_locals[9032] .. "]";
	end
	Object.Name.Position = Vector2.new(luaobf_locals[8481].X, (luaobf_locals[8481].Y - (luaobf_locals[8726] / 2)) - 20);
	Object.Name.Text = luaobf_locals[9005];
	Object.Name.Color = luaobf_locals[8570];
	Object.Name.Visible = true and not self.Chams;
else
	Object.Name.Visible = false;
end
if self.ShowDistance then
	Object.Distance.Position = Vector2.new(luaobf_locals[8481].X, luaobf_locals[8481].Y + (luaobf_locals[8726] / 2) + 10);
	Object.Distance.Text = tostring(math.floor(luaobf_locals[8463])) .. "m";
	Object.Distance.Color = luaobf_locals[8570];
	Object.Distance.Visible = true and not self.Chams;
else
	Object.Distance.Visible = false;
end
if self.Health then
	luaobf_locals[9312] = luaobf_locals[8429]:FindFirstChildOfClass("Humanoid");
	if luaobf_locals[9312] then
		luaobf_locals[9323] = luaobf_locals[9312].Health;
		luaobf_locals[9329] = luaobf_locals[9312].MaxHealth;
		luaobf_locals[9335] = math.clamp(luaobf_locals[9323] / luaobf_locals[9329], 0, 1);
		luaobf_locals[9347] = 3;
		luaobf_locals[9350] = luaobf_locals[8726] * luaobf_locals[9335];
		luaobf_locals[9355] = (luaobf_locals[8481].X - (luaobf_locals[8742] / 2)) - 5;
		luaobf_locals[9367] = (luaobf_locals[8481].Y + (luaobf_locals[8726] / 2)) - luaobf_locals[9350];
		Object.HealthBar.Size = Vector2.new(luaobf_locals[9347], luaobf_locals[9350]);
		Object.HealthBar.Position = Vector2.new(luaobf_locals[9355], luaobf_locals[9367]);
		Object.HealthBar.Color = Color3.fromRGB(255 * (1 - luaobf_locals[9335]), 255 * luaobf_locals[9335], 0);
		Object.HealthBar.Visible = true and not self.Chams;
		Object.HealthText.Position = Vector2.new(luaobf_locals[9355] - 15, luaobf_locals[9367]);
		Object.HealthText.Text = math.floor(luaobf_locals[9323]) .. "/" .. math.floor(luaobf_locals[9329]);
		Object.HealthText.Color = Color3.new(1, 1, 1);
		Object.HealthText.Visible = true and not self.Chams;
	else
		Object.HealthBar.Visible = false;
		Object.HealthText.Visible = false;
	end
else
	Object.HealthBar.Visible = false;
	Object.HealthText.Visible = false;
end
return true;
]===], "");
		local v595 = {luaobf_locals=v2,Player=Player,getDistanceFromPlayer=v111,self=self,Camera=v22,getPlayerRole=v110,LocalPlayer=v21,isPlayerCarrying=v106,isPlayerHooked=v107,isPlayerDoingAction=v108,getPlayerActionType=v109,getPlayerPlatform=v105,Vector3=Vector3,math=math,Object=Object,Vector2=Vector2,tostring=tostring,Color3=Color3};
		setfenv(v593, v1(getfenv(1), v595));
		v25[1029324648] = v593;
	end
	return v25[1029324648](...);
end;
v25.Update = function(...)
	if (v25[1084954391] == nil) then
		local v597, v598 = v0([===[
local self = ...;
for Player, Object in pairs(self.Objects) do
	if (not Player or not Player.Parent) then
		self:Remove(Player);
		continue;
	end
	if (self.Enabled and (Player ~= LocalPlayer)) then
		luaobf_locals[9686] = self:UpdateBox(Player, Object);
		if not luaobf_locals[9686] then
			Object.Box.Visible = false;
			Object.Tracer.Visible = false;
			Object.Name.Visible = false;
			Object.Distance.Visible = false;
			Object.HealthBar.Visible = false;
			Object.HealthText.Visible = false;
		end
	else
		Object.Box.Visible = false;
		Object.Tracer.Visible = false;
		Object.Name.Visible = false;
		Object.Distance.Visible = false;
		Object.HealthBar.Visible = false;
		Object.HealthText.Visible = false;
	end
	self:UpdateChams(Player);
end
self:UpdateGameObjects();
]===], "");
		local v599 = {Player=Player,Object=Object,pairs=pairs,self=self,LocalPlayer=v21,luaobf_locals=v2};
		setfenv(v597, v1(getfenv(1), v599));
		v25[1084954391] = v597;
	end
	return v25[1084954391](...);
end;
v25.Remove = function(...)
	if (v25[478986924] == nil) then
		local v601, v602 = v0([===[
local self, Player = ...;
if self.Objects[Player] then
	for _, Drawing in pairs(self.Objects[Player]) do
		if ((typeof(Drawing) == "table") and Drawing.Remove) then
			Drawing:Remove();
		end
	end
	self.Objects[Player] = nil;
end
if self.ChamObjects[Player] then
	if self.ChamObjects[Player].Highlight then
		self.ChamObjects[Player].Highlight:Destroy();
	end
	self.ChamObjects[Player] = nil;
end
]===], "");
		local v603 = {self=self,Player=Player,_=_,Drawing=Drawing,pairs=pairs,typeof=typeof};
		setfenv(v601, v1(getfenv(1), v603));
		v25[478986924] = v601;
	end
	return v25[478986924](...);
end;
v25.CreateChams = function(...)
	if (v25[1412073191] == nil) then
		local v605, v606 = v0([===[
local self, Player = ...;
luaobf_locals[10018] = Player.Character;
if not luaobf_locals[10018] then
	return;
end
luaobf_locals[10029] = Instance.new("Highlight");
luaobf_locals[10029].Adornee = luaobf_locals[10018];
luaobf_locals[10029].Enabled = false;
luaobf_locals[10029].DepthMode = Enum.HighlightDepthMode.AlwaysOnTop;
luaobf_locals[10029].FillTransparency = 0.6;
luaobf_locals[10029].OutlineTransparency = 0.2;
luaobf_locals[10093] = getPlayerRole(Player);
if (luaobf_locals[10093] == "Killer") then
	luaobf_locals[10029].FillColor = ESP.KillerColor;
	luaobf_locals[10029].OutlineColor = ESP.KillerColor;
else
	luaobf_locals[10029].FillColor = ESP.SurvivorColor;
	luaobf_locals[10029].OutlineColor = ESP.SurvivorColor;
end
luaobf_locals[10029].Parent = CoreGui;
ESP.ChamObjects[Player] = {Highlight=luaobf_locals[10029],Player=Player};
]===], "");
		local v607 = {luaobf_locals=v2,Player=Player,Instance=Instance,Enum=Enum,getPlayerRole=v110,ESP=v25,CoreGui=v20};
		setfenv(v605, v1(getfenv(1), v607));
		v25[1412073191] = v605;
	end
	return v25[1412073191](...);
end;
v25.UpdateChams = function(...)
	if (v25[17594877] == nil) then
		local v609, v610 = v0([===[
local self, Player = ...;
luaobf_locals[10195] = ESP.ChamObjects[Player];
if not luaobf_locals[10195] then
	return;
end
luaobf_locals[10208] = Player.Character;
if not luaobf_locals[10208] then
	luaobf_locals[10195].Highlight.Enabled = false;
	return;
end
luaobf_locals[10235] = luaobf_locals[10208]:FindFirstChild("HumanoidRootPart");
if not luaobf_locals[10235] then
	luaobf_locals[10195].Highlight.Enabled = false;
	return;
end
luaobf_locals[10264] = getDistanceFromPlayer(luaobf_locals[10235].Position);
if (luaobf_locals[10264] > ESP.MaxDistance) then
	luaobf_locals[10195].Highlight.Enabled = false;
	return;
end
luaobf_locals[10297] = ESP.Enabled and ESP.Chams and (Player ~= LocalPlayer);
if luaobf_locals[10297] then
	luaobf_locals[10195].Highlight.Enabled = true;
	luaobf_locals[10195].Highlight.Adornee = luaobf_locals[10208];
	luaobf_locals[10347] = getPlayerRole(Player);
	if (luaobf_locals[10347] == "Killer") then
		luaobf_locals[10195].Highlight.FillColor = ESP.KillerColor;
		luaobf_locals[10195].Highlight.OutlineColor = ESP.KillerColor;
	else
		luaobf_locals[10195].Highlight.FillColor = ESP.SurvivorColor;
		luaobf_locals[10195].Highlight.OutlineColor = ESP.SurvivorColor;
	end
else
	luaobf_locals[10195].Highlight.Enabled = false;
end
]===], "");
		local v611 = {luaobf_locals=v2,ESP=v25,Player=Player,getDistanceFromPlayer=v111,LocalPlayer=v21,getPlayerRole=v110};
		setfenv(v609, v1(getfenv(1), v611));
		v25[17594877] = v609;
	end
	return v25[17594877](...);
end;
v25.CreateGameObjectESP = function(...)
	if (v25[727697822] == nil) then
		local v613, v614 = v0([===[
local self, obj, objType = ...;
if self.GameObjects[obj] then
	return;
end
luaobf_locals[10470] = Instance.new("Highlight");
luaobf_locals[10470].Enabled = false;
luaobf_locals[10470].DepthMode = Enum.HighlightDepthMode.AlwaysOnTop;
luaobf_locals[10470].FillTransparency = 0.7;
luaobf_locals[10470].OutlineTransparency = 0.3;
luaobf_locals[10524] = self.HookColor;
if (objType == "Generator") then
	luaobf_locals[10524] = self.GeneratorColor;
elseif ((objType == "Vault") or (objType == "Window")) then
	luaobf_locals[10524] = self.VaultColor;
elseif (objType == "Gate") then
	luaobf_locals[10524] = self.GateColor;
elseif (objType == "Gift") then
	luaobf_locals[10524] = self.GiftColor;
elseif (objType == "Pallet") then
	luaobf_locals[10524] = Color3.fromRGB(255, 165, 0);
end
luaobf_locals[10470].FillColor = luaobf_locals[10524];
luaobf_locals[10470].OutlineColor = luaobf_locals[10524];
luaobf_locals[10470].Parent = CoreGui;
self.GameObjects[obj] = {Highlight=luaobf_locals[10470],Type=objType,Object=obj,LastUpdate=tick()};
]===], "");
		local v615 = {self=self,obj=obj,luaobf_locals=v2,Instance=Instance,Enum=Enum,objType=objType,Color3=Color3,CoreGui=v20,tick=tick};
		setfenv(v613, v1(getfenv(1), v615));
		v25[727697822] = v613;
	end
	return v25[727697822](...);
end;
v25.FindGameObjects = function(...)
	if (v25[877405212] == nil) then
		local v617, v618 = v0([===[
local self = ...;
luaobf_locals[10667] = {Hooks={},Generators={},Vaults={},Windows={},Pallets={},Gifts={},ExitGates={}};
luaobf_locals[10691] = Workspace:FindFirstChild("Map");
if not luaobf_locals[10691] then
	return luaobf_locals[10667];
end
for _, obj in pairs(luaobf_locals[10691]:GetDescendants()) do
	if (obj:IsA("Part") or obj:IsA("Model")) then
		luaobf_locals[10731] = obj.Name:lower();
		if (string.find(luaobf_locals[10731], "hook") or string.find(luaobf_locals[10731], "spike")) then
			table.insert(luaobf_locals[10667].Hooks, obj);
		elseif (string.find(luaobf_locals[10731], "generator") or string.find(luaobf_locals[10731], "gen")) then
			table.insert(luaobf_locals[10667].Generators, obj);
		elseif (string.find(luaobf_locals[10731], "vault") or string.find(luaobf_locals[10731], "window")) then
			table.insert(luaobf_locals[10667].Vaults, obj);
			table.insert(luaobf_locals[10667].Windows, obj);
		elseif (string.find(luaobf_locals[10731], "pallet") or string.find(luaobf_locals[10731], "plank")) then
			table.insert(luaobf_locals[10667].Pallets, obj);
		elseif (string.find(luaobf_locals[10731], "gate") or string.find(luaobf_locals[10731], "exit")) then
			table.insert(luaobf_locals[10667].ExitGates, obj);
		elseif (string.find(luaobf_locals[10731], "gift") or string.find(luaobf_locals[10731], "present")) then
			table.insert(luaobf_locals[10667].Gifts, obj);
		end
	end
end
return luaobf_locals[10667];
]===], "");
		local v619 = {luaobf_locals=v2,Workspace=v18,_=_,obj=obj,pairs=pairs,string=string,table=table};
		setfenv(v617, v1(getfenv(1), v619));
		v25[877405212] = v617;
	end
	return v25[877405212](...);
end;
v25.UpdateGameObjectESP = function(...)
	if (v25[541606189] == nil) then
		local v621, v622 = v0([===[
local self, obj, data = ...;
if (not obj or not obj.Parent) then
	return false;
end
luaobf_locals[10942] = tick();
if ((luaobf_locals[10942] - data.LastUpdate) < 0.2) then
	return true;
end
data.LastUpdate = luaobf_locals[10942];
luaobf_locals[10968] = nil;
if obj:IsA("Part") then
	luaobf_locals[10968] = obj.Position;
elseif obj:IsA("Model") then
	luaobf_locals[10994] = obj:FindFirstChild("HumanoidRootPart") or obj.PrimaryPart;
	if luaobf_locals[10994] then
		luaobf_locals[10968] = luaobf_locals[10994].Position;
	else
		luaobf_locals[10968] = obj:GetPivot().Position;
	end
else
	return false;
end
luaobf_locals[11032] = getDistanceFromPlayer(luaobf_locals[10968]);
if (luaobf_locals[11032] > self.ObjectMaxDistance) then
	data.Highlight.Enabled = false;
	return true;
end
luaobf_locals[11063] = self.Enabled;
if (data.Type == "Hook") then
	luaobf_locals[11063] = luaobf_locals[11063] and self.Hooks;
elseif (data.Type == "Generator") then
	luaobf_locals[11063] = luaobf_locals[11063] and self.Generators;
elseif ((data.Type == "Vault") or (data.Type == "Window")) then
	luaobf_locals[11063] = luaobf_locals[11063] and self.Vaults;
elseif (data.Type == "Gate") then
	luaobf_locals[11063] = luaobf_locals[11063] and self.Gates;
elseif (data.Type == "Gift") then
	luaobf_locals[11063] = luaobf_locals[11063] and self.Gifts and (luaobf_locals[11032] <= self.GiftMaxDistance);
end
data.Highlight.Adornee = obj;
data.Highlight.Enabled = luaobf_locals[11063];
luaobf_locals[11204] = 1 - (luaobf_locals[11032] / self.ObjectMaxDistance);
data.Highlight.FillTransparency = 0.7 + (0.3 * (1 - luaobf_locals[11204]));
data.Highlight.OutlineTransparency = 0.3 + (0.2 * (1 - luaobf_locals[11204]));
return true;
]===], "");
		local v623 = {obj=obj,luaobf_locals=v2,tick=tick,data=data,getDistanceFromPlayer=v111,self=self};
		setfenv(v621, v1(getfenv(1), v623));
		v25[541606189] = v621;
	end
	return v25[541606189](...);
end;
v25.UpdateGameObjects = function(...)
	if (v25[1844523885] == nil) then
		local v625, v626 = v0([===[
local self = ...;
for obj, data in pairs(self.GameObjects) do
	if (not obj or not obj.Parent) then
		self:RemoveGameObject(obj);
	elseif not self:UpdateGameObjectESP(obj, data) then
		self:RemoveGameObject(obj);
	end
end
]===], "");
		local v627 = {obj=obj,data=data,pairs=pairs,self=self};
		setfenv(v625, v1(getfenv(1), v627));
		v25[1844523885] = v625;
	end
	return v25[1844523885](...);
end;
v25.RefreshGameObjects = function(...)
	if (v25[401765951] == nil) then
		local v629, v630 = v0([===[
local self = ...;
for obj, data in pairs(self.GameObjects) do
	if data.Highlight then
		data.Highlight:Destroy();
	end
end
self.GameObjects = {};
if not self.Enabled then
	return;
end
luaobf_locals[11361] = self:FindGameObjects();
if self.Hooks then
	for _, hook in pairs(luaobf_locals[11361].Hooks) do
		self:CreateGameObjectESP(hook, "Hook");
	end
end
if self.Generators then
	for _, generator in pairs(luaobf_locals[11361].Generators) do
		self:CreateGameObjectESP(generator, "Generator");
	end
end
if self.Vaults then
	for _, vault in pairs(luaobf_locals[11361].Vaults) do
		self:CreateGameObjectESP(vault, "Vault");
	end
	for _, window in pairs(luaobf_locals[11361].Windows) do
		self:CreateGameObjectESP(window, "Window");
	end
end
if self.Gates then
	for _, gate in pairs(luaobf_locals[11361].ExitGates) do
		self:CreateGameObjectESP(gate, "Gate");
	end
end
if self.Gifts then
	for _, gift in pairs(luaobf_locals[11361].Gifts) do
		self:CreateGameObjectESP(gift, "Gift");
	end
end
for _, pallet in pairs(luaobf_locals[11361].Pallets) do
	self:CreateGameObjectESP(pallet, "Pallet");
end
]===], "");
		local v631 = {obj=obj,data=data,pairs=pairs,self=self,luaobf_locals=v2,_=_,hook=hook,generator=generator,vault=vault,window=window,gate=gate,gift=gift,pallet=pallet};
		setfenv(v629, v1(getfenv(1), v631));
		v25[401765951] = v629;
	end
	return v25[401765951](...);
end;
v25.RemoveGameObject = function(...)
	if (v25[765878553] == nil) then
		local v633, v634 = v0([===[
local self, obj = ...;
if self.GameObjects[obj] then
	if self.GameObjects[obj].Highlight then
		pcall(function()
			self.GameObjects[obj].Highlight:Destroy();
		end);
	end
	self.GameObjects[obj] = nil;
end
]===], "");
		local v635 = {self=self,obj=obj,pcall=pcall};
		setfenv(v633, v1(getfenv(1), v635));
		v25[765878553] = v633;
	end
	return v25[765878553](...);
end;
v26.Create = function(...)
	if (v26[941268753] == nil) then
		local v637, v638 = v0([===[
local self = ...;
if self.Circle then
	self.Circle:Remove();
	self.Circle = nil;
end
self.Circle = Drawing.new("Circle");
self.Circle.Visible = self.Enabled;
self.Circle.Thickness = self.Thickness;
self.Circle.Color = self.Color;
self.Circle.Radius = self.Size;
self.Circle.Filled = false;
self.Circle.Position = Vector2.new(Camera.ViewportSize.X / 2, Camera.ViewportSize.Y / 2);
]===], "");
		local v639 = {self=self,Drawing=Drawing,Vector2=Vector2,Camera=v22};
		setfenv(v637, v1(getfenv(1), v639));
		v26[941268753] = v637;
	end
	return v26[941268753](...);
end;
v26.Update = function(...)
	if (v26[1019841405] == nil) then
		local v641, v642 = v0([===[
local self = ...;
if self.Circle then
	if self.AutoBind then
		if SurvivorAimbot.Enabled then
			self.BoundToAimbot = "survivor";
			self.Size = SurvivorAimbot.FOV;
			self.Enabled = true;
		elseif FlashlightAimbot.Enabled then
			self.BoundToAimbot = "flashlight";
			self.Size = FlashlightAimbot.FOV;
			self.Enabled = true;
		else
			self.BoundToAimbot = nil;
		end
	end
	self.Circle.Visible = self.Enabled;
	self.Circle.Color = self.Color;
	self.Circle.Radius = self.Size;
	self.Circle.Thickness = self.Thickness;
	self.Circle.Position = Vector2.new(Camera.ViewportSize.X / 2, Camera.ViewportSize.Y / 2);
end
]===], "");
		local v643 = {self=self,SurvivorAimbot=v31,FlashlightAimbot=v30,Vector2=Vector2,Camera=v22};
		setfenv(v641, v1(getfenv(1), v643));
		v26[1019841405] = v641;
	end
	return v26[1019841405](...);
end;
v27.ForceMovement = function(...)
	if (v27[153944633] == nil) then
		local v645, v646 = v0([===[
local self = ...;
if not self.Enabled then
	return;
end
luaobf_locals[11993] = LocalPlayer.Character;
if not luaobf_locals[11993] then
	return;
end
luaobf_locals[12004] = luaobf_locals[11993]:FindFirstChildOfClass("Humanoid");
if not luaobf_locals[12004] then
	return;
end
if (luaobf_locals[12004]:GetState() ~= Enum.HumanoidStateType.Running) then
	luaobf_locals[12004]:ChangeState(Enum.HumanoidStateType.Running);
end
luaobf_locals[12044] = luaobf_locals[11993]:FindFirstChild("CheckInterractable");
if luaobf_locals[12044] then
	for _, attr in pairs({"isVaulting","isSliding","isRepairing","isHealing","isUnhooking","isExiting","isDroppingPallet"}) do
		luaobf_locals[12044]:SetAttribute(attr, false);
	end
end
luaobf_locals[12090] = luaobf_locals[11993]:FindFirstChild("HumanoidRootPart");
if (luaobf_locals[12090] and (luaobf_locals[12004].MoveDirection.Magnitude > 0)) then
	luaobf_locals[12111] = luaobf_locals[12004].MoveDirection.Unit;
	luaobf_locals[12120] = luaobf_locals[12111] * self.OriginalWalkSpeed * self.Multiplier;
	luaobf_locals[12090].Velocity = Vector3.new(luaobf_locals[12120].X, luaobf_locals[12090].Velocity.Y, luaobf_locals[12120].Z);
end
luaobf_locals[12004].WalkSpeed = self.OriginalWalkSpeed * self.Multiplier;
luaobf_locals[12004].JumpPower = self.OriginalJumpPower * math.sqrt(self.Multiplier);
]===], "");
		local v647 = {self=self,luaobf_locals=v2,LocalPlayer=v21,Enum=Enum,_=_,attr=attr,pairs=pairs,Vector3=Vector3,math=math};
		setfenv(v645, v1(getfenv(1), v647));
		v27[153944633] = v645;
	end
	return v27[153944633](...);
end;
v27.StartAggressiveBypass = function(...)
	if (v27[1616569246] == nil) then
		local v649, v650 = v0([===[
local self = ...;
if self.BypassThread then
	return;
end
self.BypassThread = task.spawn(function()
	while self.Enabled do
		self:ForceMovement();
		task.wait();
	end
	self.BypassThread = nil;
end);
]===], "");
		local v651 = {self=self,task=task};
		setfenv(v649, v1(getfenv(1), v651));
		v27[1616569246] = v649;
	end
	return v27[1616569246](...);
end;
v27.Toggle = function(...)
	if (v27[2137429940] == nil) then
		local v653, v654 = v0([===[
local self, value = ...;
self.Enabled = value;
if value then
	task.wait(0.5);
	luaobf_locals[12288] = LocalPlayer.Character;
	if luaobf_locals[12288] then
		luaobf_locals[12297] = luaobf_locals[12288]:FindFirstChildOfClass("Humanoid");
		if luaobf_locals[12297] then
			self.OriginalWalkSpeed = luaobf_locals[12297].WalkSpeed;
			self.OriginalJumpPower = luaobf_locals[12297].JumpPower;
		end
	end
	self:StartAggressiveBypass();
	if self.HeartbeatConnection then
		self.HeartbeatConnection:Disconnect();
	end
	self.HeartbeatConnection = RunService.Heartbeat:Connect(function()
		if self.Enabled then
			self:ForceMovement();
		end
	end);
else
	if self.BypassThread then
		task.cancel(self.BypassThread);
		self.BypassThread = nil;
	end
	if self.HeartbeatConnection then
		self.HeartbeatConnection:Disconnect();
		self.HeartbeatConnection = nil;
	end
	luaobf_locals[12433] = LocalPlayer.Character;
	if luaobf_locals[12433] then
		luaobf_locals[12442] = luaobf_locals[12433]:FindFirstChildOfClass("Humanoid");
		if luaobf_locals[12442] then
			luaobf_locals[12442].WalkSpeed = self.OriginalWalkSpeed;
			luaobf_locals[12442].JumpPower = self.OriginalJumpPower;
		end
	end
end
]===], "");
		local v655 = {self=self,value=value,task=task,luaobf_locals=v2,LocalPlayer=v21,RunService=v14};
		setfenv(v653, v1(getfenv(1), v655));
		v27[2137429940] = v653;
	end
	return v27[2137429940](...);
end;
v27.SetMultiplier = function(...)
	if (v27[291950068] == nil) then
		local v657, v658 = v0([===[
local self, value = ...;
self.Multiplier = math.clamp(value, 1, 10);
]===], "");
		local v659 = {self=self,math=math,value=value};
		setfenv(v657, v1(getfenv(1), v659));
		v27[291950068] = v657;
	end
	return v27[291950068](...);
end;
v28.PerformJump = function(...)
	if (v28[568424158] == nil) then
		local v661, v662 = v0([===[
local self = ...;
if not self.Enabled then
	return;
end
luaobf_locals[12521] = tick();
if ((luaobf_locals[12521] - self.LastJumpTime) < self.JumpCooldown) then
	return;
end
luaobf_locals[12539] = LocalPlayer.Character;
if not luaobf_locals[12539] then
	return;
end
luaobf_locals[12550] = luaobf_locals[12539]:FindFirstChildOfClass("Humanoid");
luaobf_locals[12558] = luaobf_locals[12539]:FindFirstChild("HumanoidRootPart");
if (luaobf_locals[12550] and luaobf_locals[12558] and (luaobf_locals[12550].Health > 0)) then
	luaobf_locals[12558].Velocity = Vector3.new(luaobf_locals[12558].Velocity.X, self.JumpPower, luaobf_locals[12558].Velocity.Z);
	self.LastJumpTime = luaobf_locals[12521];
end
]===], "");
		local v663 = {self=self,luaobf_locals=v2,tick=tick,LocalPlayer=v21,Vector3=Vector3};
		setfenv(v661, v1(getfenv(1), v663));
		v28[568424158] = v661;
	end
	return v28[568424158](...);
end;
v28.ToggleAutoJump = function(...)
	if (v28[1853117847] == nil) then
		local v665, v666 = v0([===[
local self, value = ...;
self.AutoJump = value;
if value then
	if self.AutoJumpThread then
		coroutine.close(self.AutoJumpThread);
	end
	self.AutoJumpThread = task.spawn(function()
		while self.AutoJump and self.Enabled do
			self:PerformJump();
			task.wait(self.AutoJumpInterval);
		end
	end);
elseif self.AutoJumpThread then
	coroutine.close(self.AutoJumpThread);
	self.AutoJumpThread = nil;
end
]===], "");
		local v667 = {self=self,value=value,coroutine=coroutine,task=task};
		setfenv(v665, v1(getfenv(1), v667));
		v28[1853117847] = v665;
	end
	return v28[1853117847](...);
end;
v31.FindTarget = function(...)
	if (v31[472541371] == nil) then
		local v669, v670 = v0([===[
local self = ...;
if not self.AimKeyDown then
	return nil;
end
luaobf_locals[12741] = nil;
luaobf_locals[12744] = math.huge;
luaobf_locals[12750] = getPlayerRole(LocalPlayer);
for _, player in pairs(Players:GetPlayers()) do
	if ((player ~= LocalPlayer) and player.Character) then
		luaobf_locals[12776] = player.Character;
		luaobf_locals[12782] = luaobf_locals[12776]:FindFirstChildOfClass("Humanoid");
		luaobf_locals[12790] = luaobf_locals[12776]:FindFirstChild("Head");
		if (luaobf_locals[12782] and (luaobf_locals[12782].Health > 0) and luaobf_locals[12790]) then
			luaobf_locals[12810] = getPlayerRole(player);
			luaobf_locals[12815] = false;
			if self.TeamCheck then
				if ((luaobf_locals[12750] == "Killer") and (luaobf_locals[12810] == "Survivor")) then
					luaobf_locals[12815] = true;
				elseif ((luaobf_locals[12750] == "Survivor") and (luaobf_locals[12810] == "Killer")) then
					luaobf_locals[12815] = true;
				end
			else
				luaobf_locals[12815] = true;
			end
			if luaobf_locals[12815] then
				luaobf_locals[12859], luaobf_locals[12860] = Camera:WorldToViewportPoint(luaobf_locals[12790].Position);
				if luaobf_locals[12860] then
					luaobf_locals[12874] = Vector2.new(Camera.ViewportSize.X / 2, Camera.ViewportSize.Y / 2);
					luaobf_locals[12899] = Vector2.new(luaobf_locals[12859].X, luaobf_locals[12859].Y);
					luaobf_locals[12914] = (luaobf_locals[12874] - luaobf_locals[12899]).Magnitude;
					if ((luaobf_locals[12914] < self.FOV) and (luaobf_locals[12914] < luaobf_locals[12744])) then
						luaobf_locals[12744] = luaobf_locals[12914];
						luaobf_locals[12741] = player;
					end
				end
			end
		end
	end
end
return luaobf_locals[12741];
]===], "");
		local v671 = {self=self,luaobf_locals=v2,math=math,getPlayerRole=v110,LocalPlayer=v21,_=_,player=player,pairs=pairs,Players=v13,Camera=v22,Vector2=Vector2};
		setfenv(v669, v1(getfenv(1), v671));
		v31[472541371] = v669;
	end
	return v31[472541371](...);
end;
v31.AimAtTarget = function(...)
	if (v31[638064443] == nil) then
		local v673, v674 = v0([===[
local self = ...;
if (not self.Enabled or not self.AimKeyDown) then
	return;
end
luaobf_locals[12966] = self:FindTarget();
if (luaobf_locals[12966] and luaobf_locals[12966].Character) then
	luaobf_locals[12981] = luaobf_locals[12966].Character:FindFirstChild("Head");
	if luaobf_locals[12981] then
		luaobf_locals[12995] = workspace.CurrentCamera;
		luaobf_locals[13001] = luaobf_locals[12981].Position;
		luaobf_locals[13007] = luaobf_locals[12995].CFrame;
		luaobf_locals[13013] = CFrame.lookAt(luaobf_locals[12995].CFrame.Position, luaobf_locals[13001]);
		luaobf_locals[13028] = luaobf_locals[13007]:Lerp(luaobf_locals[13013], self.Smoothness);
		luaobf_locals[12995].CFrame = luaobf_locals[13028];
		self.Target = luaobf_locals[12966];
	else
		self.Target = nil;
	end
else
	self.Target = nil;
end
]===], "");
		local v675 = {self=self,luaobf_locals=v2,workspace=workspace,CFrame=CFrame};
		setfenv(v673, v1(getfenv(1), v675));
		v31[638064443] = v673;
	end
	return v31[638064443](...);
end;
v30.FindTarget = function(...)
	if (v30[1620835851] == nil) then
		local v677, v678 = v0([===[
local self = ...;
if not self.AimKeyDown then
	return nil;
end
luaobf_locals[13099] = nil;
luaobf_locals[13102] = math.huge;
luaobf_locals[13108] = getPlayerRole(LocalPlayer);
if (luaobf_locals[13108] ~= "Survivor") then
	return nil;
end
for _, player in pairs(Players:GetPlayers()) do
	if ((player ~= LocalPlayer) and player.Character) then
		luaobf_locals[13141] = player.Character;
		luaobf_locals[13147] = luaobf_locals[13141]:FindFirstChildOfClass("Humanoid");
		luaobf_locals[13155] = luaobf_locals[13141]:FindFirstChild("Head");
		if (luaobf_locals[13147] and (luaobf_locals[13147].Health > 0) and luaobf_locals[13155]) then
			luaobf_locals[13175] = getPlayerRole(player);
			luaobf_locals[13180] = luaobf_locals[13175] == "Killer";
			if luaobf_locals[13180] then
				luaobf_locals[13188], luaobf_locals[13189] = Camera:WorldToViewportPoint(luaobf_locals[13155].Position);
				if luaobf_locals[13189] then
					luaobf_locals[13203] = Vector2.new(Camera.ViewportSize.X / 2, Camera.ViewportSize.Y / 2);
					luaobf_locals[13228] = Vector2.new(luaobf_locals[13188].X, luaobf_locals[13188].Y);
					luaobf_locals[13243] = (luaobf_locals[13203] - luaobf_locals[13228]).Magnitude;
					if ((luaobf_locals[13243] < self.FOV) and (luaobf_locals[13243] < luaobf_locals[13102])) then
						luaobf_locals[13102] = luaobf_locals[13243];
						luaobf_locals[13099] = player;
					end
				end
			end
		end
	end
end
return luaobf_locals[13099];
]===], "");
		local v679 = {self=self,luaobf_locals=v2,math=math,getPlayerRole=v110,LocalPlayer=v21,_=_,player=player,pairs=pairs,Players=v13,Camera=v22,Vector2=Vector2};
		setfenv(v677, v1(getfenv(1), v679));
		v30[1620835851] = v677;
	end
	return v30[1620835851](...);
end;
v30.AimAtTarget = function(...)
	if (v30[1726990388] == nil) then
		local v681, v682 = v0([===[
local self = ...;
if (not self.Enabled or not self.AimKeyDown) then
	return;
end
luaobf_locals[13295] = self:FindTarget();
if (luaobf_locals[13295] and luaobf_locals[13295].Character) then
	luaobf_locals[13310] = luaobf_locals[13295].Character:FindFirstChild("Head");
	if luaobf_locals[13310] then
		luaobf_locals[13324] = workspace.CurrentCamera;
		luaobf_locals[13330] = luaobf_locals[13310].Position;
		luaobf_locals[13336] = false;
		if LocalPlayer.Character then
			for _, item in pairs(LocalPlayer.Character:GetChildren()) do
				if (item.Name:lower():find("flashlight") or item:IsA("Tool")) then
					luaobf_locals[13336] = true;
					break;
				end
			end
		end
		if luaobf_locals[13336] then
			luaobf_locals[13389] = luaobf_locals[13324].CFrame;
			luaobf_locals[13395] = CFrame.lookAt(luaobf_locals[13324].CFrame.Position, luaobf_locals[13330]);
			luaobf_locals[13410] = luaobf_locals[13389]:Lerp(luaobf_locals[13395], self.Smoothness);
			luaobf_locals[13324].CFrame = luaobf_locals[13410];
			self.Target = luaobf_locals[13295];
		else
			self.Target = nil;
		end
	end
else
	self.Target = nil;
end
]===], "");
		local v683 = {self=self,luaobf_locals=v2,workspace=workspace,LocalPlayer=v21,_=_,item=item,pairs=pairs,CFrame=CFrame};
		setfenv(v681, v1(getfenv(1), v683));
		v30[1726990388] = v681;
	end
	return v30[1726990388](...);
end;
v96.StartMoonwalk = function(...)
	if (v96[463561348] == nil) then
		local v685, v686 = v0([===[
local self = ...;
if self.IsActive then
	return;
end
self.IsActive = true;
luaobf_locals[13489] = LocalPlayer.Character;
if not luaobf_locals[13489] then
	self.IsActive = false;
	return;
end
local humanoid = luaobf_locals[13489]:FindFirstChildOfClass("Humanoid");
local rootPart = luaobf_locals[13489]:FindFirstChild("HumanoidRootPart");
if (not humanoid or not rootPart) then
	self.IsActive = false;
	return;
end
local originalAutoRotate = humanoid.AutoRotate;
local originalWalkSpeed = humanoid.WalkSpeed;
local originalCFrame = rootPart.CFrame;
humanoid.AutoRotate = false;
local camera = workspace.CurrentCamera;
local cameraLook = camera.CFrame.LookVector;
local targetCFrame = CFrame.new(rootPart.Position) * CFrame.Angles(0, math.pi, 0);
local spinDuration = 0.3;
local startTime = tick();
task.spawn(function()
	while self.IsActive and ((tick() - startTime) < spinDuration) do
		if not rootPart then
			break;
		end
		luaobf_locals[13642] = (tick() - startTime) / spinDuration;
		rootPart.CFrame = originalCFrame:Lerp(targetCFrame, luaobf_locals[13642]);
		task.wait();
	end
end);
task.wait(spinDuration);
self.MovementThread = task.spawn(function()
	luaobf_locals[13693] = tick();
	luaobf_locals[13697] = true;
	while self.IsActive do
		if (not humanoid or not rootPart) then
			break;
		end
		humanoid:Move(-rootPart.CFrame.LookVector);
		luaobf_locals[13727] = tick();
		if ((luaobf_locals[13727] - luaobf_locals[13693]) >= self.A_D_Speed) then
			luaobf_locals[13697] = not luaobf_locals[13697];
			luaobf_locals[13693] = luaobf_locals[13727];
		end
		if luaobf_locals[13697] then
			humanoid:Move(-rootPart.CFrame.RightVector);
		else
			humanoid:Move(rootPart.CFrame.RightVector);
		end
		humanoid.WalkSpeed = self.WalkSpeed;
		rootPart.CFrame = CFrame.new(rootPart.Position, rootPart.Position - cameraLook);
		task.wait();
	end
	if humanoid then
		humanoid.AutoRotate = originalAutoRotate;
		humanoid.WalkSpeed = originalWalkSpeed or 16;
	end
end);
]===], "");
		local v687 = {self=self,luaobf_locals=v2,LocalPlayer=v21,humanoid=humanoid,rootPart=rootPart,originalAutoRotate=originalAutoRotate,originalWalkSpeed=originalWalkSpeed,originalCFrame=originalCFrame,camera=camera,workspace=workspace,cameraLook=cameraLook,targetCFrame=targetCFrame,CFrame=CFrame,math=math,spinDuration=spinDuration,startTime=startTime,tick=tick,task=task};
		setfenv(v685, v1(getfenv(1), v687));
		v96[463561348] = v685;
	end
	return v96[463561348](...);
end;
v96.StopMoonwalk = function(...)
	if (v96[2058427718] == nil) then
		local v689, v690 = v0([===[
local self = ...;
if not self.IsActive then
	return;
end
self.IsActive = false;
if self.MovementThread then
	coroutine.close(self.MovementThread);
	self.MovementThread = nil;
end
luaobf_locals[13897] = LocalPlayer.Character;
if luaobf_locals[13897] then
	luaobf_locals[13906] = luaobf_locals[13897]:FindFirstChildOfClass("Humanoid");
	if luaobf_locals[13906] then
		luaobf_locals[13906].AutoRotate = true;
		luaobf_locals[13906].WalkSpeed = 16;
	end
end
]===], "");
		local v691 = {self=self,coroutine=coroutine,luaobf_locals=v2,LocalPlayer=v21};
		setfenv(v689, v1(getfenv(1), v691));
		v96[2058427718] = v689;
	end
	return v96[2058427718](...);
end;
v99.RemoveSkillCheckEvents = function(...)
	if (v99[338962947] == nil) then
		local v693, v694 = v0([===[
local self = ...;
if not self.Enabled then
	return;
end
luaobf_locals[13953] = ReplicatedStorage:FindFirstChild("Remotes");
if luaobf_locals[13953] then
	luaobf_locals[13953] = luaobf_locals[13953]:FindFirstChild("Generator");
	if luaobf_locals[13953] then
		luaobf_locals[13976] = luaobf_locals[13953]:FindFirstChild("SkillCheckEvent");
		if luaobf_locals[13976] then
			self.DestroyedEvents['GeneratorSkillCheckEvent'] = luaobf_locals[13976]:Clone();
			luaobf_locals[13976]:Destroy();
		end
		luaobf_locals[14010] = luaobf_locals[13953]:FindFirstChild("SkillCheckResultEvent");
		if luaobf_locals[14010] then
			self.DestroyedEvents['GeneratorSkillCheckResultEvent'] = luaobf_locals[14010]:Clone();
			luaobf_locals[14010]:Destroy();
		end
		luaobf_locals[14044] = luaobf_locals[13953]:FindFirstChild("SkillCheckFailEvent");
		if luaobf_locals[14044] then
			self.DestroyedEvents['GeneratorSkillCheckFailEvent'] = luaobf_locals[14044]:Clone();
			luaobf_locals[14044]:Destroy();
		end
	end
end
luaobf_locals[14078] = ReplicatedStorage:FindFirstChild("Remotes");
if luaobf_locals[14078] then
	luaobf_locals[14078] = luaobf_locals[14078]:FindFirstChild("Healing");
	if luaobf_locals[14078] then
		luaobf_locals[14101] = luaobf_locals[14078]:FindFirstChild("SkillCheckEvent");
		if luaobf_locals[14101] then
			self.DestroyedEvents['HealingSkillCheckEvent'] = luaobf_locals[14101]:Clone();
			luaobf_locals[14101]:Destroy();
		end
		luaobf_locals[14135] = luaobf_locals[14078]:FindFirstChild("SkillCheckResultEvent");
		if luaobf_locals[14135] then
			self.DestroyedEvents['HealingSkillCheckResultEvent'] = luaobf_locals[14135]:Clone();
			luaobf_locals[14135]:Destroy();
		end
		luaobf_locals[14169] = luaobf_locals[14078]:FindFirstChild("SkillCheckFailEvent");
		if luaobf_locals[14169] then
			self.DestroyedEvents['HealingSkillCheckFailEvent'] = luaobf_locals[14169]:Clone();
			luaobf_locals[14169]:Destroy();
		end
	end
end
]===], "");
		local v695 = {self=self,luaobf_locals=v2,ReplicatedStorage=v19};
		setfenv(v693, v1(getfenv(1), v695));
		v99[338962947] = v693;
	end
	return v99[338962947](...);
end;
v99.RestoreSkillCheckEvents = function(...)
	if (v99[1175283653] == nil) then
		local v697, v698 = v0([===[
local self = ...;
luaobf_locals[14211] = ReplicatedStorage:FindFirstChild("Remotes");
if luaobf_locals[14211] then
	luaobf_locals[14211] = luaobf_locals[14211]:FindFirstChild("Generator");
	if luaobf_locals[14211] then
		for eventName, eventClone in pairs(self.DestroyedEvents) do
			if (string.find(eventName, "Generator") and not luaobf_locals[14211]:FindFirstChild(eventName)) then
				eventClone.Parent = luaobf_locals[14211];
			end
		end
	end
end
luaobf_locals[14271] = ReplicatedStorage:FindFirstChild("Remotes");
if luaobf_locals[14271] then
	luaobf_locals[14271] = luaobf_locals[14271]:FindFirstChild("Healing");
	if luaobf_locals[14271] then
		for eventName, eventClone in pairs(self.DestroyedEvents) do
			if (string.find(eventName, "Healing") and not luaobf_locals[14271]:FindFirstChild(eventName)) then
				eventClone.Parent = luaobf_locals[14271];
			end
		end
	end
end
table.clear(self.DestroyedEvents);
]===], "");
		local v699 = {luaobf_locals=v2,ReplicatedStorage=v19,eventName=eventName,eventClone=eventClone,pairs=pairs,self=self,string=string,table=table};
		setfenv(v697, v1(getfenv(1), v699));
		v99[1175283653] = v697;
	end
	return v99[1175283653](...);
end;
v99.Toggle = function(...)
	if (v99[2018988413] == nil) then
		local v701, v702 = v0([===[
local self, value = ...;
self.Enabled = value;
if value then
	self:RemoveSkillCheckEvents();
else
	self:RestoreSkillCheckEvents();
end
]===], "");
		local v703 = {self=self,value=value};
		setfenv(v701, v1(getfenv(1), v703));
		v99[2018988413] = v701;
	end
	return v99[2018988413](...);
end;
v33.Apply = function(...)
	if (v33[237306421] == nil) then
		local v705, v706 = v0([===[
local self = ...;
if not self.Enabled then
	return;
end
if not self.OriginalBrightness then
	self.OriginalBrightness = Lighting.Brightness;
	self.OriginalAmbient = Lighting.Ambient;
	self.OriginalOutdoorAmbient = Lighting.OutdoorAmbient;
end
Lighting.Brightness = self.BrightnessValue;
Lighting.Ambient = self.AmbientValue;
Lighting.OutdoorAmbient = self.OutdoorAmbientValue;
Lighting.GlobalShadows = false;
Lighting.FogEnd = 100000;
]===], "");
		local v707 = {self=self,Lighting=v17};
		setfenv(v705, v1(getfenv(1), v707));
		v33[237306421] = v705;
	end
	return v33[237306421](...);
end;
v33.Restore = function(...)
	if (v33[1716354238] == nil) then
		local v709, v710 = v0([===[
local self = ...;
if self.OriginalBrightness then
	Lighting.Brightness = self.OriginalBrightness;
	Lighting.Ambient = self.OriginalAmbient;
	Lighting.OutdoorAmbient = self.OriginalOutdoorAmbient;
end
Lighting.GlobalShadows = true;
Lighting.FogEnd = 1000;
]===], "");
		local v711 = {self=self,Lighting=v17};
		setfenv(v709, v1(getfenv(1), v711));
		v33[1716354238] = v709;
	end
	return v33[1716354238](...);
end;
v33.Toggle = function(...)
	if (v33[1306579407] == nil) then
		local v713, v714 = v0([===[
local self, value = ...;
self.Enabled = value;
if value then
	self:Apply();
else
	self:Restore();
end
]===], "");
		local v715 = {self=self,value=value};
		setfenv(v713, v1(getfenv(1), v715));
		v33[1306579407] = v713;
	end
	return v33[1306579407](...);
end;
v100.Update = function(...)
	if (v100[100467360] == nil) then
		local v717, v718 = v0([===[
local self = ...;
if not self.Enabled then
	return;
end
self.Hue = (self.Hue + self.Speed) % 1;
luaobf_locals[14636] = Color3.fromHSV(self.Hue, 0.8, 1);
ESP.KillerColor = luaobf_locals[14636];
ESP.SurvivorColor = luaobf_locals[14636];
ESP.HookColor = luaobf_locals[14636];
ESP.GeneratorColor = luaobf_locals[14636];
ESP.VaultColor = luaobf_locals[14636];
ESP.GateColor = luaobf_locals[14636];
]===], "");
		local v719 = {self=self,luaobf_locals=v2,Color3=Color3,ESP=v25};
		setfenv(v717, v1(getfenv(1), v719));
		v100[100467360] = v717;
	end
	return v100[100467360](...);
end;
v100.Toggle = function(...)
	if (v100[1779125593] == nil) then
		local v721, v722 = v0([===[
local self, value = ...;
self.Enabled = value;
if value then
	if self.RainbowConnection then
		self.RainbowConnection:Disconnect();
	end
	self.RainbowConnection = RunService.Heartbeat:Connect(function()
		self:Update();
	end);
elseif self.RainbowConnection then
	self.RainbowConnection:Disconnect();
	self.RainbowConnection = nil;
end
]===], "");
		local v723 = {self=self,value=value,RunService=v14};
		setfenv(v721, v1(getfenv(1), v723));
		v100[1779125593] = v721;
	end
	return v100[1779125593](...);
end;
do
	v2[14796] = v12.ESP:AddLeftGroupbox("Player ESP");
	v2[14796]:AddToggle("ESPEnabled", {Text="Enable ESP",Default=false,Callback=function(v215)
		v25.Enabled = v215;
	end});
	v2[14796]:AddToggle("ESPBoxes", {Text="Boxes",Default=not v23,Callback=function(v217)
		v25.Boxes = v217;
	end});
	v2[14796]:AddToggle("ESPTracers", {Text="Tracers",Default=false,Callback=function(v219)
		v25.Tracers = v219;
	end});
	v2[14796]:AddToggle("ESPNames", {Text="Names",Default=false,Callback=function(v221)
		v25.Names = v221;
	end});
	v2[14796]:AddToggle("ESPNoNames", {Text="No Names",Default=false,Callback=function(v223)
		v25.NoNames = v223;
	end});
	v2[14796]:AddToggle("ESPHealth", {Text="Health Bar",Default=true,Callback=function(v225)
		v25.Health = v225;
	end});
	v2[14796]:AddToggle("ESPShowDistance", {Text="Show Distance",Default=false,Callback=function(v227)
		v25.ShowDistance = v227;
	end});
	v2[14796]:AddToggle("ESPChams", {Text="Chams",Default=v23,Callback=function(v229)
		v25.Chams = v229;
	end});
	v2[14796]:AddToggle("ESPShowCarried", {Text="Show Carried Players",Default=true,Callback=function(v231)
		v25.ShowCarried = v231;
	end});
	v2[14796]:AddToggle("ESPShowHooked", {Text="Show Hooked Players",Default=true,Callback=function(v233)
		v25.ShowHooked = v233;
	end});
	v2[14796]:AddToggle("ESPShowActions", {Text="Show Action Status",Default=true,Callback=function(v235)
		v25.ShowActions = v235;
	end});
	v2[14796]:AddSlider("PlayerESPDistance", {Text="Player ESP Distance",Default=((v23 and 800) or 1500),Min=100,Max=((v23 and 2000) or 5000),Rounding=0,Callback=function(v237)
		v25.MaxDistance = v237;
	end});
	v2[15161] = v12.ESP:AddRightGroupbox("ESP Colors");
	v2[15172] = v2[15161]:AddLabel("Killer Color");
	v2[15172]:AddColorPicker("KillerColor", {Default=Color3.fromRGB(255, 23, 23),Title="Killer Color",Callback=function(v239)
		v25.KillerColor = v239;
	end});
	v2[15215] = v2[15161]:AddLabel("Survivor Color");
	v2[15215]:AddColorPicker("SurvivorColor", {Default=Color3.fromRGB(0, 255, 58),Title="Survivor Color",Callback=function(v241)
		v25.SurvivorColor = v241;
	end});
	v2[15258] = v2[15161]:AddLabel("Hook Color");
	v2[15258]:AddColorPicker("HookColor", {Default=Color3.fromRGB(255, 0, 153),Title="Hook Color",Callback=function(v243)
		v25.HookColor = v243;
	end});
	v2[15301] = v2[15161]:AddLabel("Generator Color");
	v2[15301]:AddColorPicker("GeneratorColor", {Default=Color3.fromRGB(255, 252, 76),Title="Generator Color",Callback=function(v245)
		v25.GeneratorColor = v245;
	end});
	v2[15344] = v2[15161]:AddLabel("Vault Color");
	v2[15344]:AddColorPicker("VaultColor", {Default=Color3.fromRGB(100, 255, 100),Title="Vault Color",Callback=function(v247)
		v25.VaultColor = v247;
	end});
	v2[15387] = v2[15161]:AddLabel("Gate Color");
	v2[15387]:AddColorPicker("GateColor", {Default=Color3.fromRGB(0, 255, 255),Title="Gate Color",Callback=function(v249)
		v25.GateColor = v249;
	end});
	v2[15430] = v2[15161]:AddLabel("Gift Color");
	v2[15430]:AddColorPicker("GiftColor", {Default=Color3.fromRGB(255, 105, 180),Title="Gift Color",Callback=function(v251)
		v25.GiftColor = v251;
	end});
	v2[15161]:AddDivider();
	v2[15478] = v2[15161]:AddLabel("Game Objects ESP");
	v2[15161]:AddToggle("ESPHooks", {Text="Hook ESP",Default=true,Callback=function(v253)
		v25.Hooks = v253;
		v25:RefreshGameObjects();
	end});
	v2[15161]:AddToggle("ESPGenerators", {Text="Generator ESP",Default=true,Callback=function(v255)
		v25.Generators = v255;
		v25:RefreshGameObjects();
	end});
	v2[15161]:AddToggle("ESPVaults", {Text="Window ESP",Default=true,Callback=function(v257)
		v25.Vaults = v257;
		v25:RefreshGameObjects();
	end});
	v2[15161]:AddToggle("ESPGates", {Text="Gate ESP",Default=true,Callback=function(v259)
		v25.Gates = v259;
		v25:RefreshGameObjects();
	end});
	v2[15161]:AddToggle("ESPGifts", {Text="Gift ESP",Default=true,Callback=function(v261)
		v25.Gifts = v261;
		v25:RefreshGameObjects();
	end});
	v2[15161]:AddSlider("ObjectESPDistance", {Text="Object ESP Distance",Default=((v23 and 25) or 45),Min=10,Max=((v23 and 100) or 200),Rounding=0,Callback=function(v263)
		v25.ObjectMaxDistance = v263;
		v25:RefreshGameObjects();
	end});
	v2[15161]:AddSlider("GiftESPDistance", {Text="Gift ESP Distance",Default=((v23 and 100) or 200),Min=10,Max=((v23 and 200) or 500),Rounding=0,Callback=function(v265)
		v25.GiftMaxDistance = v265;
		v25:RefreshGameObjects();
	end});
	v2[15161]:AddButton("Refresh Objects", function()
		v25:RefreshGameObjects();
	end);
	local v167 = function()
		v2[15768] = v18:FindFirstChild("Map");
		if v2[15768] then
			for v781, v782 in pairs(v2[15768]:GetDescendants()) do
				if v782.Name:lower():find("gate") then
					v782:Destroy();
				end
			end
		end
	end;
	v2[15161]:AddButton("Remove Gate", v167);
	v2[15817] = v12.ESP:AddLeftGroupbox("FOV Circle");
	v2[15817]:AddToggle("FOVCircleEnabled", {Text="Enable",Default=false,Callback=function(v268)
		v26.Enabled = v268;
		v26:Update();
	end});
	v2[15817]:AddSlider("FOVCircleSize", {Text="Circle Size",Default=((v23 and 30) or 50),Min=10,Max=((v23 and 100) or 200),Rounding=0,Callback=function(v270)
		v26.Size = v270;
		v26:Update();
	end});
	v2[15911] = v2[15817]:AddLabel("Circle Color");
	v2[15911]:AddColorPicker("FOVCircleColor", {Default=Color3.fromRGB(255, 255, 255),Title="FOV Circle Color",Callback=function(v272)
		v26.Color = v272;
		v26:Update();
	end});
end
do
	v2[15960] = v12.Aimbot:AddLeftGroupbox("Flashlight Aimbot");
	v2[15960]:AddToggle("FlashlightAimbotEnabled", {Text="Enable",Default=false,Callback=function(v274)
		v30.Enabled = v274;
	end});
	v2[15960]:AddSlider("FlashlightSmoothness", {Text="Smoothness",Default=((v23 and 0.5) or 0.3),Min=0.1,Max=1,Rounding=1,Callback=function(v276)
		v30.Smoothness = v276;
	end});
	v2[15960]:AddSlider("FlashlightFOV", {Text="Aimbot FOV",Default=((v23 and 50) or 30),Min=10,Max=((v23 and 80) or 100),Rounding=0,Callback=function(v278)
		v30.FOV = v278;
		if (v30.Enabled and (v26.BoundToAimbot == "flashlight")) then
			v26.Size = v278;
		end
	end});
	v2[16108] = v12.Aimbot:AddRightGroupbox("Survivor Aimbot");
	v2[16108]:AddToggle("SurvivorAimbotEnabled", {Text="Enable",Default=false,Callback=function(v280)
		v31.Enabled = v280;
	end});
	v2[16108]:AddSlider("SurvivorSmoothness", {Text="Smoothness",Default=((v23 and 0.5) or 0.3),Min=0.1,Max=1,Rounding=1,Callback=function(v282)
		v31.Smoothness = v282;
	end});
	v2[16108]:AddSlider("SurvivorFOV", {Text="Aimbot FOV",Default=((v23 and 50) or 30),Min=10,Max=((v23 and 80) or 100),Rounding=0,Callback=function(v284)
		v31.FOV = v284;
		if (v31.Enabled and (v26.BoundToAimbot == "survivor")) then
			v26.Size = v284;
		end
	end});
	v2[16108]:AddToggle("SurvivorTeamCheck", {Text="Team Check",Default=true,Callback=function(v286)
		v31.TeamCheck = v286;
	end});
	v2[16284] = v12.Aimbot:AddLeftGroupbox("Magic Flashlight");
	v2[16284]:AddToggle("MagicFlashlightEnabled", {Text="Enable",Default=false,Callback=function(v288)
		v32.Enabled = v288;
	end});
	v2[16284]:AddSlider("MagicRange", {Text="Range",Default=50,Min=10,Max=100,Rounding=0,Callback=function(v290)
		v32.Range = v290;
	end});
	v2[16284]:AddToggle("MagicAutoBlind", {Text="Auto Blind",Default=false,Callback=function(v292)
		v32.AutoBlind = v292;
	end});
end
do
	v2[16389] = v12.Player:AddLeftGroupbox("Movement");
	v2[16389]:AddToggle("SpeedMultiplierEnabled", {Text="Speed Multiplier",Default=false,Callback=function(v294)
		v27:Toggle(v294);
	end});
	v2[16389]:AddSlider("SpeedMultiplierValue", {Text="Speed Multiplier",Default=2,Min=1,Max=10,Rounding=1,Callback=function(v295)
		v27:SetMultiplier(v295);
	end});
	v2[16389]:AddToggle("QuickDashEnabled", {Text="Quick Dash",Default=false,Callback=function(v296)
		v95.Enabled = v296;
	end});
	v2[16389]:AddSlider("DashDistance", {Text="Dash Distance",Default=5,Min=3,Max=20,Rounding=0,Callback=function(v298)
		v95.DashDistance = v298;
	end});
	v2[16522] = v12.Player:AddRightGroupbox("Jump System");
	v2[16522]:AddToggle("JumpEnabled", {Text="Enable Jump",Default=false,Callback=function(v300)
		v27.ApplyJumpPower = v300;
		if v27.Enabled then
			v27:ForceApplySpeed();
		end
	end});
	v2[16522]:AddSlider("JumpPower", {Text="Jump Power",Default=50,Min=20,Max=200,Rounding=0,Callback=function(v302)
		v28.JumpPower = v302;
	end});
	v2[16522]:AddToggle("AutoJump", {Text="Auto Jump",Default=false,Callback=function(v304)
		v28:ToggleAutoJump(v304);
	end});
	v2[16522]:AddSlider("AutoJumpInterval", {Text="Auto Jump Interval",Default=2,Min=0.5,Max=5,Rounding=1,Callback=function(v305)
		v28.AutoJumpInterval = v305;
	end});
	v2[16522]:AddSlider("JumpCooldown", {Text="Jump Cooldown",Default=0.5,Min=0.1,Max=2,Rounding=1,Callback=function(v307)
		v28.JumpCooldown = v307;
	end});
	if v23 then
		v2[16522]:AddButton("JUMP", function()
			if v28.Enabled then
				v28:PerformJump();
			end
		end);
	end
end
do
	v2[16730] = v12.Experimental:AddLeftGroupbox("RAGE");
	v2[16730]:AddToggle("RAGENoClip", {Text="Enable NoClip",Default=false,Callback=function(v309)
		v35.NoClip = v309;
	end});
	v2[16730]:AddToggle("RAGEFlying", {Text="Enable Flying",Default=false,Callback=function(v311)
		v35:ToggleFlying(v311);
	end});
	v2[16730]:AddSlider("RAGEFlySpeed", {Text="Fly Speed",Default=50,Min=10,Max=((v23 and 100) or 200),Rounding=0,Callback=function(v312)
		v35.FlySpeed = v312;
	end});
	v2[16730]:AddToggle("RAGEFastVault", {Text="Fast Vault",Default=false,Callback=function(v314)
		v35.FastVault = v314;
	end});
	v2[16730]:AddSlider("RAGEAnimationSpeed", {Text="Animation Speed",Default=1.1,Min=1,Max=2,Rounding=1,Callback=function(v316)
		v35.AnimationSpeed = v316;
	end});
	v2[16899] = v12.Experimental:AddRightGroupbox("Exploits");
	v2[16899]:AddToggle("NoSkillChecks", {Text="No Skill Checks",Default=false,Callback=function(v318)
		v99:Toggle(v318);
	end});
	v2[16899]:AddToggle("PerfectSkillChecksEnabled", {Text="Perfect Skill Checks",Default=false,Callback=function(v319)
		v36:Toggle(v319);
	end});
	v2[16899]:AddToggle("VDAntiDamageToggle", {Text="Anti Damage",Default=false,Callback=function(v320)
		v46:ToggleAntiDamage();
	end});
	v2[16899]:AddToggle("VDNoFogToggle", {Text="No Fog",Default=false,Callback=function(v321)
		v46:ToggleNoFog();
	end});
	v2[16899]:AddToggle("VDInvisibleMapToggle", {Text="Invisible Map",Default=false,Callback=function(v322)
		v46:ToggleInvisibleMap();
	end});
	v2[16899]:AddToggle("HitboxExpanderEnabled", {Text="Enable Hitbox Expander",Default=false,Callback=function(v323)
		v97.Enabled = v323;
	end});
	v2[16899]:AddSlider("HitboxScale", {Text="Hitbox Scale",Default=1.5,Min=1,Max=3,Rounding=1,Callback=function(v325)
		v97.Scale = v325;
	end});
	v2[17092] = v12.Experimental:AddLeftGroupbox("Invisibility");
	v2[17092]:AddToggle("InvisibilityEnabled", {Text="Enable Invisibility",Default=false,Callback=function(v327)
		v98.Enabled = v327;
	end});
	v2[17131] = v12.Experimental:AddRightGroupbox("Spin Bot");
	v2[17131]:AddToggle("SpinBotEnabled", {Text="Enable Spin Bot",Default=false,Callback=function(v329)
		v93.Enabled = v329;
	end});
	v2[17131]:AddSlider("SpinBotSpeed", {Text="Spin Speed",Default=5,Min=1,Max=20,Rounding=0,Callback=function(v331)
		v93.Speed = v331;
	end});
end
local v146 = v12.Experimental:AddRightGroupbox("Movement State");
v146:AddToggle("FakeInjured", {Text="Fake Injured",Default=false,Callback=function(v179)
	v101:ToggleFakeInjured(v179);
end});
do
	v2[17243] = v12.Visuals:AddLeftGroupbox("Full Bright");
	v2[17243]:AddToggle("FullBrightEnabled", {Text="Enable Brightness",Default=false,Callback=function(v333)
		v33:Toggle(v333);
	end});
	v2[17243]:AddSlider("FullBrightValue", {Text="Brightness",Default=2,Min=0,Max=10,Rounding=1,Callback=function(v334)
		v33.BrightnessValue = v334;
		if v33.Enabled then
			v17.Brightness = v334;
		end
	end});
	v2[17331] = v2[17243]:AddLabel("Ambient Color");
	v2[17331]:AddColorPicker("AmbientColor", {Default=Color3.fromRGB(255, 255, 255),Title="Ambient Color",Callback=function(v336)
		v33.AmbientValue = v336;
		if v33.Enabled then
			v17.Ambient = v336;
		end
	end});
	v2[17390] = v2[17243]:AddLabel("Outdoor Ambient");
	v2[17390]:AddColorPicker("OutdoorColor", {Default=Color3.fromRGB(128, 128, 128),Title="Outdoor Ambient",Callback=function(v338)
		v33.OutdoorAmbientValue = v338;
		if v33.Enabled then
			v17.OutdoorAmbient = v338;
		end
	end});
	v2[17243]:AddButton("No Shadow", function()
		v46:NoShadow();
	end);
	v2[17243]:AddButton("Morning", function()
		v46:SetMorning();
	end);
	v2[17243]:AddButton("Afternoon", function()
		v46:SetAfternoon();
	end);
	local v183 = v12.Visuals:AddRightGroupbox("Stretch Res");
	v183:AddToggle("StretchEnabled", {Text="Enable Stretch",Default=false,Callback=function(v340)
		v34:Toggle(v340);
	end});
	v183:AddSlider("StretchX", {Text="Horizontal: 1.0x",Default=100,Min=50,Max=200,Rounding=0,Suffix="%",Callback=function(v341)
		v34:SetX(v341 / 100);
		v183.instances[2].Text = "Horizontal: " .. string.format("%.2f", v341 / 100) .. "x";
	end});
	v183:AddSlider("StretchY", {Text="Vertical: 1.0x",Default=100,Min=50,Max=200,Rounding=0,Suffix="%",Callback=function(v343)
		v34:SetY(v343 / 100);
		v183.instances[3].Text = "Vertical: " .. string.format("%.2f", v343 / 100) .. "x";
	end});
	v183:AddButton("Reset", function()
		v34:SetX(1);
		v34:SetY(1);
		Options.StretchX:SetValue(100);
		Options.StretchY:SetValue(100);
	end);
	local v184 = v12.Visuals:AddLeftGroupbox("Rainbow Mode");
	v184:AddToggle("RainbowModeEnabled", {Text="Enable Rainbow Mode",Default=false,Callback=function(v345)
		v100:Toggle(v345);
	end});
	v184:AddSlider("RainbowSpeed", {Text="Rainbow Speed",Default=0.01,Min=0.001,Max=0.1,Rounding=3,Callback=function(v346)
		v100.Speed = v346;
	end});
end
local v147 = v12.Visuals:AddRightGroupbox("FOV");
v147:AddToggle("FOVChangerEnabled", {Text="FOV Changer",Default=false,Callback=function(v185)
	v37:Toggle(v185);
end});
v147:AddSlider("FOVValue", {Text="Field of View",Default=70,Min=1,Max=120,Rounding=0,Suffix="°",Callback=function(v186)
	v37:SetFOV(v186);
end});
v147:AddToggle("FOVSmoothTransition", {Text="Smooth Transition",Default=true,Callback=function(v187)
	v37.SmoothTransition = v187;
end});
v147:AddSlider("FOVTransitionSpeed", {Text="Transition Speed",Default=5,Min=1,Max=20,Rounding=0,Callback=function(v189)
	v37.TransitionSpeed = v189;
end});
do
	v2[17910] = v12.Teleport:AddLeftGroupbox("Player Teleport");
	v2[17910]:AddButton("Teleport to Killer", function()
		for v725, v726 in pairs(v13:GetPlayers()) do
			if ((v726 ~= v21) and (v110(v726) == "Killer")) then
				if (v726.Character and v726.Character:FindFirstChild("HumanoidRootPart")) then
					v2[17967] = v726.Character.HumanoidRootPart.Position;
					if (v21.Character and v21.Character:FindFirstChild("HumanoidRootPart")) then
						v21.Character.HumanoidRootPart.CFrame = CFrame.new(v2[17967] + Vector3.new(5, 0, 5));
					end
				end
				break;
			end
		end
	end);
	v2[17910]:AddButton("Teleport to Teammate", function()
		for v727, v728 in pairs(v13:GetPlayers()) do
			if ((v728 ~= v21) and (v110(v728) == "Survivor")) then
				if (v728.Character and v728.Character:FindFirstChild("HumanoidRootPart")) then
					v2[18078] = v728.Character.HumanoidRootPart.Position;
					if (v21.Character and v21.Character:FindFirstChild("HumanoidRootPart")) then
						v21.Character.HumanoidRootPart.CFrame = CFrame.new(v2[18078] + Vector3.new(5, 0, 5));
					end
				end
				break;
			end
		end
	end);
	v2[18143] = v12.Teleport:AddRightGroupbox("Object Teleport");
	v2[18143]:AddButton("Teleport to Generator", function()
		v2[18162] = v25:FindGameObjects();
		if (#v2[18162].Generators > 0) then
			v2[18178] = v2[18162].Generators[1];
			v2[18186] = v2[18178]:GetPivot().Position;
			if (v21.Character and v21.Character:FindFirstChild("HumanoidRootPart")) then
				v21.Character.HumanoidRootPart.CFrame = CFrame.new(v2[18186] + Vector3.new(3, 0, 3));
			end
		end
	end);
	v2[18143]:AddButton("Teleport to Hook", function()
		v2[18256] = v25:FindGameObjects();
		if (#v2[18256].Hooks > 0) then
			v2[18272] = v2[18256].Hooks[1];
			v2[18280] = v2[18272]:GetPivot().Position;
			if (v21.Character and v21.Character:FindFirstChild("HumanoidRootPart")) then
				v21.Character.HumanoidRootPart.CFrame = CFrame.new(v2[18280] + Vector3.new(3, 0, 3));
			end
		end
	end);
	v2[18143]:AddButton("Teleport to Gate", function()
		v2[18350] = v25:FindGameObjects();
		if (#v2[18350].ExitGates > 0) then
			v2[18366] = v2[18350].ExitGates[1];
			v2[18374] = v2[18366]:GetPivot().Position;
			if (v21.Character and v21.Character:FindFirstChild("HumanoidRootPart")) then
				v21.Character.HumanoidRootPart.CFrame = CFrame.new(v2[18374] + Vector3.new(3, 0, 3));
			end
		end
	end);
	v2[18143]:AddButton("Teleport to Nearest Gift", function()
		v2[18444] = v25:FindGameObjects();
		if (#v2[18444].Gifts > 0) then
			v2[18460] = nil;
			v2[18463] = math.huge;
			for v783, v784 in pairs(v2[18444].Gifts) do
				v2[18479] = v784:GetPivot().Position;
				v2[18489] = v111(v2[18479]);
				if (v2[18489] < v2[18463]) then
					v2[18463] = v2[18489];
					v2[18460] = v784;
				end
			end
			if v2[18460] then
				v2[18510] = v2[18460]:GetPivot().Position;
				if (v21.Character and v21.Character:FindFirstChild("HumanoidRootPart")) then
					v21.Character.HumanoidRootPart.CFrame = CFrame.new(v2[18510] + Vector3.new(2, 0, 2));
				end
			end
		end
	end);
end
do
	v2[18573] = v12["UI Settings"]:AddLeftGroupbox("Menu");
	v2[18573]:AddButton("Unload", function()
		v5:Unload();
		v37:Cleanup();
		v46:Cleanup();
		self:ClearHighlights();
		for v729, v730 in pairs(self.SmartProxies) do
			if (v730 and v730.Parent) then
				v730:Destroy();
			end
		end
		self.SmartProxies = {};
		if self.NoclipConnection then
			self.NoclipConnection:Disconnect();
			self.NoclipConnection = nil;
		end
		if self.AntiDamageConnection then
			self.AntiDamageConnection:Disconnect();
			self.AntiDamageConnection = nil;
		end
		for v731, v732 in pairs(v18:GetChildren()) do
			if (v732.Name == "AntiDamageEscapeMarker") then
				v732:Destroy();
			end
		end
		if v36.HeartbeatConn then
			v36.HeartbeatConn:Disconnect();
			v36.HeartbeatConn = nil;
		end
		for v733, v734 in pairs(v25.Objects) do
			v25:Remove(v733);
		end
		for v735, v736 in pairs(v25.GameObjects) do
			v25:RemoveGameObject(v735);
		end
		if v26.Circle then
			v26.Circle:Remove();
		end
		if v27.Connection then
			v27.Connection:Disconnect();
			v27.Connection = nil;
		end
		if v21.Character then
			v2[18816] = v21.Character:FindFirstChildOfClass("Humanoid");
			if v2[18816] then
				v2[18816].WalkSpeed = 16;
				v2[18816].JumpPower = 50;
			end
		end
		if v28.AutoJumpThread then
			coroutine.close(v28.AutoJumpThread);
		end
		if v100.RainbowConnection then
			v100.RainbowConnection:Disconnect();
		end
		v33:Restore();
	end);
	v2[18573]:AddLabel("Menu Keybind"):AddKeyPicker("MenuKeybind", {Default="RightShift",NoUI=true,Text="Menu keybind"});
	v5.ToggleKeybind = Options.MenuKeybind;
	v5:SetWatermarkVisibility(true);
	local v196 = tick();
	local v197 = 0;
	local v198 = 60;
	local v199 = game:GetService("RunService").RenderStepped:Connect(function()
		v197 += 1
		if ((tick() - v196) >= 1) then
			v198 = v197;
			v196 = tick();
			v197 = 0;
		end
		v5:SetWatermark(("Bunni v1.0.0 | %s fps | %s ms"):format(math.floor(v198), math.floor(game:GetService("Stats").Network.ServerStatsItem["Data Ping"]:GetValue())));
	end);
	v6:SetLibrary(v5);
	v7:SetLibrary(v5);
	v7:IgnoreThemeSettings();
	v7:SetIgnoreIndexes({"MenuKeybind"});
	v6:SetFolder("Bunni");
	v7:SetFolder("Bunni/Config");
	v7:BuildConfigSection(v12["UI Settings"]);
	v6:ApplyToTab(v12["UI Settings"]);
	v7:LoadAutoloadConfig();
end
v21.CharacterAdded:Connect(function(v200)
	task.wait(0.5);
	if v27.Enabled then
		task.wait(0.1);
		v2[19102] = v200:FindFirstChildOfClass("Humanoid");
		if v2[19102] then
			v2[19102].WalkSpeed = 16 * v27.Multiplier;
			if v27.ApplyJumpPower then
				v2[19102].JumpPower = 50 * math.sqrt(v27.Multiplier);
			end
		end
	end
end);
v21.CharacterRemoving:Connect(function()
	for v353, v354 in pairs(v46.SmartProxies) do
		if (v354 and v354.Parent) then
			v354:Destroy();
		end
	end
	v46.SmartProxies = {};
	v46.GeneratorESP = false;
	v46.HookESP = false;
	v46.KillerESP = false;
	v46.PlayerESP = false;
end);
v15.InputBegan:Connect(function(v206, v207)
	if v207 then
		return;
	end
	if ((v206.KeyCode == Enum.KeyCode.G) and v96.Enabled) then
		v96.HoldKeyDown = true;
		if not v96.IsActive then
			v96:StartMoonwalk();
		end
	end
	if (v206.UserInputType == Enum.UserInputType.MouseButton2) then
		v30.AimKeyDown = true;
		v31.AimKeyDown = true;
	end
	if (v206.KeyCode == Enum.KeyCode.E) then
		v31.AimKeyDown = true;
	end
	if (v206.KeyCode == Enum.KeyCode.Space) then
		if v28.Enabled then
			v28:PerformJump();
		end
	end
	if ((v206.KeyCode == v95.DashKey) and v95.Enabled) then
		if (v21.Character and v21.Character:FindFirstChild("HumanoidRootPart")) then
			v2[19409] = v21.Character.HumanoidRootPart;
			v2[19418] = v22.CFrame.LookVector;
			v2[19427] = Vector3.new(v2[19418].X, 0, v2[19418].Z).Unit * v95.DashDistance;
			v2[19409].CFrame = v2[19409].CFrame + v2[19427];
		end
	end
end);
v15.InputEnded:Connect(function(v208, v209)
	if v209 then
		return;
	end
	if (v208.KeyCode == Enum.KeyCode.G) then
		v96.HoldKeyDown = false;
		if v96.IsActive then
			v96:StopMoonwalk();
		end
	end
	if (v208.UserInputType == Enum.UserInputType.MouseButton2) then
		v30.AimKeyDown = false;
		v31.AimKeyDown = false;
	end
	if (v208.KeyCode == Enum.KeyCode.E) then
		v31.AimKeyDown = false;
	end
end);
local v148 = v14.Heartbeat:Connect(function(v210)
	if v25.Enabled then
		v25:Update();
	end
	v26:Update();
	if v37.Enabled then
		v37:Apply();
	end
	if v27.Enabled then
		v27:ApplySpeed();
	end
	if (v26.Enabled and not v26.Circle) then
		v26:Create();
	end
	if v31.Enabled then
		v31:AimAtTarget();
	end
	if v30.Enabled then
		v30:AimAtTarget();
	end
	if (v35.NoClip and v21.Character) then
		for v776, v777 in pairs(v21.Character:GetDescendants()) do
			if v777:IsA("BasePart") then
				v777.CanCollide = false;
			end
		end
	end
	if (v93.Enabled and v21.Character) then
		v2[19719] = v21.Character:FindFirstChild("HumanoidRootPart");
		if v2[19719] then
			v2[19733] = v2[19719].Orientation.Y;
			v2[19742] = (v2[19733] + v93.Speed) % 360;
			v2[19719].CFrame = CFrame.new(v2[19719].Position) * CFrame.Angles(0, math.rad(v2[19742]), 0);
		end
	end
	if v100.Enabled then
		v100:Update();
	end
end);
v26:Create();
for v211, v212 in pairs(v13:GetPlayers()) do
	if (v212 ~= v21) then
		v25:CreateBox(v212);
		v25:CreateChams(v212);
	end
end
v13.PlayerAdded:Connect(function(v213)
	task.wait(1);
	if (v213 ~= v21) then
		v25:CreateBox(v213);
		v25:CreateChams(v213);
	end
end);
v13.PlayerRemoving:Connect(function(v214)
	v25:Remove(v214);
end);
v11:SelectTab(1);
v5:Notify("Welcome to Bunni v1.0.0", 5);`;

  res.status(200).send(luaCode);
}
